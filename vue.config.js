/* eslint-disable */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // chainWebpack: config => {
  //   config.module
  //   .rule('vue')
  //   .use('vue-loader')
  //   .tap(options => {
  //     options.compilerOptions = {
  //       ...options.compilerOptions,
  //       isCustomElement: tag => tag.startWith('ion-') 
  //     }
  //     return options
  //   })
  // }
})
