'use strict';
const pkg = require('../package.json')
const log = require('@dodream/log')
module.exports = core;

function core() {
    checkPkgVersion();
}


function checkPkgVersion() {
    log.notice('version', pkg.version)
}