module.exports = function(config){
  config.set({

    basePath : './app/',

    files : [
        { pattern: 'bower_components/angular/angular.js', watched: false },
        { pattern: 'bower_components/angular-route/angular-route.js', watched: false },
        { pattern: 'bower_components/angular-mocks/angular-mocks.js', watched: false },
        'app.js',
        'components/**/*.js'
    ],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],
    
    reporters: ['progress'],

    plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-spec-reporter'
    ],
    
    captureTimeout: 20000,
    
    autoWatchBatchDelay: 2500,
    
    singleRun: true

  });
};
