exports.config = {
  conventions: {
    assets: /^app\/assets\//
  },
  modules: {
    definition: false,
    wrapper: false
  },
  paths: {
    "public": '_public'
  },
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^app\/bower_components/,
        'js/app.js': /^app\/scripts/
        // 'test/scenarios.js': /^test(\/|\\)e2e/
      },
      order: {
        before: [
          'app/bower_components/lodash/lodash.js',
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-resource/angular-resource.js',
          'app/bower_components/angular-route/angular-route.js'

         ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app\/styles/
      },
      order: {
        before: [
          'app/styles/_variables.less',
          'app/styles/_overrides.less',
          'app/styles/app.less'
        ]
      }
    }
  },
  plugins: {}
};
