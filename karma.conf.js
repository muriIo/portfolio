// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  const chromeBin = process.env.CHROME_BIN;

  if (!chromeBin) {
    console.error('CHROME_BIN environment variable is not set. Please set it to the path of Chrome.exe.');
    process.exit(1);
  }

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/portfolio'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['WindowsChrome'],
    restartOnFileChange: true,
    customLaunchers: {
      WindowsChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--headless', '--disable-dev-shm-usage', '--remote-debugging-port=9222', '--disable-software-rasterizer'],
        executablePath: chromeBin
      }
    }
  });
};
