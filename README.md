electron-quick-start 项目是简单的js+css+html的桌面级应用程序；

可以进行打包和发布；


vue-project是使用了vue前端技术+electron的桌面级应用程序；

可以进行打包和发布；

Fiddle-test文件夹里的程序是，用Fiddle软件保存的jss+css+html文件。可以使用electron进行打包和发布。



1、安装nvm

2、安装14.17.0 node【使用最新版的16.18.0快给我坑死了】

3、vue create vueproject【选择vue2即可】

4、cd vueproject

5、npm run serve【检查web页面是否OK】

6、vue add electron-builder【安装electron相关的插件】

7、npm run electron:serve【运行桌面级VUE程序】

8、npm run electron:build【进行打包】



-----------------

自定义登录界面

```bash
npm install bootstrap
```

```bash
npm install vue-router
```



放弃使用Vue， 因为我做了一个用户登录界面，但是无法使用electron进行打包。但我还是想用Vue。



-------

是vue桌面软件具备自动更新的功能：

https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/recipes.html#auto-update

1、npm install electron-updater

2、创建vue.config.js

内容如下：

```
module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  /*css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
   // 启用 CSS modules for all css / pre-processor files.
   modules: false
  },*/
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
​    // open: process.platform === 'darwin',
​    //将服务启动后默认打开浏览器
​    open: true,
​    host: '0.0.0.0',
​    port: 8080,
​    https: false,
​    hotOnly: false,
​    proxy: {// 设置代理
​      '/api': {
​        target: 'http://www.lzzyaf.com',
​        changeOrigin: true,
​        pathRewrite: {
​          '^/api': '/'
​        }
​      }
​    },
​    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
​    electronBuilder: {
​     builderOptions: {
​      publish: ['github']
​     }
​    }
   }
}
```

3、修改`src/background.js`文件，import要放在开头

```
...
+  import { autoUpdater } from "electron-updater"
...

if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
+   autoUpdater.checkForUpdatesAndNotify()
  }
...
```
4、设置GitHub Personal Access Token

**Note:** You will need a GitHub personal access token for this step. To get one, go to [https://github.com/settings/tokens (opens new window)](https://github.com/settings/tokens)and click `Generate new token`.

In order for Electron Builder to upload a release to GitHub, you will need to make your token available by setting the `GH_TOKEN` env variable to your token:

On Linux/MacOS:

```
export GH_TOKEN=TOKEN-GOES-HERE
```

On Windows:

```
set GH_TOKEN=TOKEN-GOES-HERE
```

### 

5、发布你的软件

npm run electron:build -- -p always



6、Publish Release

去github网站， 将草稿release掉；



7、Check for Updates

Install your app, then run it. You won't get an update notification yet, because this is the latest version. You will have to publish a new version by increasing the `version` field in your `package.json`, then repeating the 3 previous steps. Now, your old app should give you an update notification.
