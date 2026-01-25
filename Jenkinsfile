try {
    node('node-builder && os:linux && docker-buildx') {
        stage('Checkout'){
            checkout scm
        }
        stage('Install and Configure tools and settings') {
            env.NODEJS_HOME = "${tool 'node-24'}"
            env.SONARSCANNER_HOME = "${tool 'sonar-scanner-8.0.1'}"
            env.PATH="${env.NODEJS_HOME}/bin:${env.SONARSCANNER_HOME}/bin:${env.PATH}"
        }
        stage('Install all dependencies') {
            sh 'npm install --force'
        }
        stage('Tests') {
            sh 'npm run lint'
            sh 'npm run test'
        }
        stage('OWASP - Dependency Check') {
            // run dependency check
            dependencyCheck odcInstallation: 'odc-12.1', nvdCredentialsId: 'NVD_API_KEY', additionalArguments: '''
                    -o './'
                    -s './'
                    -f 'ALL'
                    --prettyPrint'''

            // create report
            dependencyCheckPublisher pattern: 'dependency-check-report.xml'
        }
        stage('SonarQube analysis') {
            withSonarQubeEnv('sonarqube-cloud') {
                // sh "npx sonarqube-scanner -Dsonar.host.url=${env.SONAR_HOST_URL} -Dsonar.branch.name=${env.BRANCH_NAME}"
                sh "sonar-scanner -Dsonar.host.url=${env.SONAR_HOST_URL} -Dsonar.branch.name=${env.BRANCH_NAME}"
            }
        }
        stage('Compile and Build') {
            sh 'npm run build'
        }
        stage('Build Docker Image Multiplatform linux/amd64 and linux/arm64/v8') {
            script {
              try {
                loginOnRegistryUsingDocker('dkjnkpub.starlord443.dev', 'nexus-user')

                def tags = ""
                def packageJson = readJSON file: 'package.json'
                def version = packageJson.version

                tags +="--tag dkjnkpub.starlord443.dev/marcoshssilva/website:${version}-${env.BRANCH_NAME.replace('/', '_')} "
                tags +="--tag dkjnkpub.starlord443.dev/marcoshssilva/website:${env.BRANCH_NAME.replace('/', '_')} "

                if (env.BRANCH_NAME == 'main') {
                  tags += "--tag dkjnkpub.starlord443.dev/marcoshssilva/website:latest "
                }

                sh """
                  docker buildx build ./ \
                    --builder multiarch-build \
                    --platform linux/amd64,linux/arm64/v8 \
                    --file ./Dockerfile \
                    ${tags} \
                    --push
                """
              } catch (Exception e) {
                currentBuild.result = 'UNSTABLE'
                echo "Pipeline step Docker Buildx failed: ${e.getMessage()}"
              } finally {
                cleanWs()
                sh 'echo Y | docker buildx prune --builder multiarch-build'
                sh 'docker buildx inspect --bootstrap --builder multiarch-build'
              }
            }
        }
    }

    node('dokku') {
        stage('Dokku - Sync and Deploy') {
          script {
              try {
                  sh "ssh dokku@dev.starlord443.dev -p 22 apps:exists marcosilva-dev || (ssh dokku@dev.starlord443.dev -p 22 apps:create marcosilva-dev)"
                  sh "ssh dokku@dev.starlord443.dev -p 22 builder:set marcosilva-dev selected pack"

                  sh "git remote | grep -q '^dokku\$' || git remote add dokku ssh://dokku@dev.starlord443.dev:22/marcosilva-dev"
                  sh 'git fetch dokku'
                  sh "git checkout -b ${env.BUILD_NUMBER}-${env.BRANCH_NAME.replace('/','_')}"

                  if (!sh(returnStatus: true, script: "git rev-parse --quiet --verify dokku/main")) {
                      echo "Branch dokku/main already exists. Can make merge."
                      sh "git merge dokku/main"
                  } else {
                      echo "Branch dokku/main not found. Skipping merge."
                  }

                  sh "git push dokku ${env.BUILD_NUMBER}-${env.BRANCH_NAME.replace('/','_')}:main"
              } catch(exception) {
                  currentBuild.result = 'FAILURE'
              } finally {
                cleanWs()
              }

          }
        }
    }
} catch(ex) {
    currentBuild.result = 'FAILURE'
    error("Unexpected error: ${ex.message}")
}
