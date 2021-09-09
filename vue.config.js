module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    lintOnSave: false,
    runtimeCompiler: false,
    chainWebpack: () => {},
    configureWebpack: () => {},
    productionSourceMap: false,
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        //将服务启动后默认打开浏览器
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false
    },
    pluginOptions: {
        electronBuilder: {
          builderOptions: {
            publish: [
                {
                    provider: "github",
                    owner: "FengZhiheng",
                    repo: "learn-vue-electron",
                    releaseType: 'draft'
                }
            ]
          }
        }
      }
}