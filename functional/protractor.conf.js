exports.config = {
    baseUrl: 'http://localhost:8000/app/',
    
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    specs: [
        '/feature/*.feature'
    ],

    capabilities: {
        'browserName': 'firefox'
    },
    framework: 'cucumber',

    cucumberOpts: {
        require: 'step_definitions/*.js',
        format: 'pretty'
    }
};
