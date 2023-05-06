'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  VUE_BASE_API:'"http://192.168.110.76:8001"',
  VUE_RANDOM:'"ttttpcmsoqm@20stjx376"',
  NODE_ENV: '"development"'
})
