'use strict';

var BuildCommand = require('ember-cli/lib/commands/build'),
    setEnv = require('../utils/set-env.js'),
    options = require('../utils/options');

module.exports = BuildCommand.extend({
  name: 'khartis:build',
  description: 'Build khartis',
  availableOptions: BuildCommand.prototype.availableOptions.concat(options),
  run: function(options) {
    setEnv(options);
    return this._super.apply(this, arguments);
  }
});