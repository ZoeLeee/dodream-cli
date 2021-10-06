'use strict';

const npmlog = require('npmlog');

npmlog.addLevel('success', 2000, { fg: "green", bold: true })
npmlog.level = process.env.LOG_LEVEL || 'info'
npmlog.heading = 'dodream'

module.exports = npmlog;