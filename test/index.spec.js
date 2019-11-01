const path = require('path');
const pluginTester = require('babel-plugin-tester');
const plugin = require('../src');

pluginTester({
  plugin,
  fixtures: path.join(__dirname, 'fixtures'),
  pluginOptions: {
    pathRegex: /test_remove/
  }
});
