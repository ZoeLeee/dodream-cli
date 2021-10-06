#! /usr/bin/env node

const importLocal = require('import-local');

if (importLocal(__filename)) {
    require('@dodream/log')('cli', '正在使用本地版本')
}
else {
    require('../lib')(process.argv.slice(2))
}