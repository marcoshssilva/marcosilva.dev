@Library(['nodejs@main']) _
pipelineNodeJs21WithDockerPublicImage('marcoshssilva/marcoshssilva-com-br',
    [
        'APP_NAME': 'marcoshssilva-com-br',
        'DEPLOY': 'DOKKU',
        'HOST': 'marcoshssilva.com.br',
        'SKIP_BUILD': false,
        'SKIP_BUILDIMAGE': false,
        'SKIP_SONARQUBE': false,
        'SKIP_TESTS': false,
        'USE_LETSENCRYPT': false // available only for branch 'main'
    ],
)
