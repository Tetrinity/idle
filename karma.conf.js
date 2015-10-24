module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
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
