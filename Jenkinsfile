try {
    node('node-builder') {
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
        stage('Compile and Build') {
            sh 'npm run build'
        }
    }
} catch(ex) {
    currentBuild.result = 'ABORTED'
    error("Unexpected error: ${ex.message}")
}
