/* eslint-disable */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '',
  css:{
    loaderOptions:{
      sass:{
        // additionalData:`@import "@/scss/_variables.scss";`
      }
    }
  }
  // useEslint: false,
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
});
