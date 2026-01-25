try {
    node('node-builder && os:linux') {
        stage('Checkout'){
            checkout scm
        }
        stage('Install and Configure tools and settings') {
            env.NODEJS_HOME = "${tool 'node-24'}"
            env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
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
            def scannerHome = tool 'sonar-scanner-8.0.1';
            withSonarQubeEnv('sonarqube-cloud') {
                sh "${scannerHome}/bin/sonar-scanner -Dsonar.host.url=${env.SONAR_HOST_URL} -Dsonar.branch.name=${env.BRANCH_NAME}"
            }
        }
        stage('Compile and Build') {
            sh 'npm run build'
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
