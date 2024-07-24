@Library(['nodejs@main']) _
pipelineNodeJs21WithDockerPrivateImage('marcoshssilva/marcoshssilva-com-br',
    [
        'APP_NAME': 'marcoshssilva-website',
        'CERT_DOMAIN': 'marcoshssilva.com.br',
        'DEPLOY': 'DOKKU',
        'DOKKU_SELECTED_BUILDPACK': 'herokuish', // Options can be 'dockerfile', 'null' and DEFAULT 'herokuish'
        // 'HOST': 'marcoshssilva.com.br',
        // 'USE_SSL': true,          // NOT NEED SET IF HAS BEEN EXECUTED
        // 'USE_LETSENCRYPT': false, // available only for branch 'main', NOT NEED SET IF HAS BEEN EXECUTED
        // 'SKIP_BUILD': true,
        // 'SKIP_BUILDIMAGE': true,
        // 'SKIP_SONARQUBE': true,
        // 'SKIP_TESTS': false,
    ],
)
