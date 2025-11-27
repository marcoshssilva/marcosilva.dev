try {
    node('node-builder && os:linux && docker-buildx') {
        stage('Checkout'){
            checkout scm
        }
        stage('Install and Configure tools and settings') {
            env.NODEJS_HOME = "${tool 'node-18'}"
            env.SONARSCANNER_HOME = "${tool 'sonar-scanner-6.2.0'}"
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
} catch(ex) {
    currentBuild.result = 'ABORTED'
    error("Unexpected error: ${ex.message}")
}
