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
        'js/vendor.js': /^bower_components/,
        'js/app.js': /^app\/scripts/
        // 'test/scenarios.js': /^test(\/|\\)e2e/
      },
      order: {
        before: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/lodash/dist/lodash.js',
          'bower_components/angular/angular.js'
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
