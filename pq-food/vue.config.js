// const path = require('path');//引入path模块

// function resolve(dir){
//     return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
// }

// module.exports={
//   chainWebpack:(config)=>{
//     config.resolve.alias
//     .set('@',resolve('./src'))
//     .set('img', resolve('src/assets/img'))
//     .set('style', resolve('src/assets/style'))
//     .set('components',resolve('src/components'))
//     //set第一个参数：设置的别名，第二个参数：设置的路径　　
//   },
// }

module.exports = {
  publicPath: './',
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
          //     '^/index': ''
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
        title: '签到',
        chunks: ['chunk-vendors', 'chunk-common', 'app']
    }
  }
}