module.exports = {
  publicPath: './',
  configureWebpack:{
    resolve:{
      alias:{
        img:"@/assets/img",
        common:"@/common",
        components:"@/components",
        network:"@/network",
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
        plugins: [
          require("postcss-px2rem")({
            remUnit: 50
          })
        ]
      }
    }
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    https: false,
    open: true,
    proxy: {
      '/api' : {
        target: 'http://39.105.221.84',
        changeOrigin: true,
        // pathRewrite: {
        //     '^/api': 'http://39.105.221.84'
        // }
      }
    }
  },
  lintOnSave: false,
  pages: {
    app: {
        //入口
        entry: 'src/main.js',
        //模板来源
        template: 'public/index.html',
        //在dist的输出
        filename: 'index.html',
        //template路径下文件的title
        title: '全全料理',
        chunks: ['chunk-vendors', 'chunk-common', 'app']
    }
  }
}