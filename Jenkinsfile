try {
    node('node-builder && os:linux') {
        stage('Checkout'){
            checkout scm
        }
        stage('Install and Configure tools and settings') {
            env.NODEJS_HOME = "${tool 'node-20'}"
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
            // dependencyCheck odcInstallation: '10.0.4', nvdCredentialsId: 'NVD_API_KEY', additionalArguments: '''
            //         -o './'
            //         -s './'
            //         -f 'ALL'
            //         --prettyPrint'''

            // create report
            // dependencyCheckPublisher pattern: 'dependency-check-report.xml'
            echo 'OWASP Dependency Check is not configured in this pipeline.'
        }
        stage('SonarQube analysis') {
            def scannerHome = tool 'sonar-scanner-6.2.0';
            withSonarQubeEnv('sonarqube-cloud') {
                sh "${scannerHome}/bin/sonar-scanner -Dsonar.host.url=${env.SONAR_HOST_URL} -Dsonar.branch.name=${env.BRANCH_NAME}"
            }
        }
        stage('Compile and Build') {
            sh 'npm run build'
        }
    }
} catch(ex) {
    currentBuild.result = 'ABORTED'
    error("Unexpected error: ${ex.message}")
}
