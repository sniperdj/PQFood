const path = require('path');//引入path模块

function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports={
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('img', resolve('src/assets/img'))
    .set('style', resolve('src/assets/style'))
    .set('components',resolve('src/components'))
    //set第一个参数：设置的别名，第二个参数：设置的路径　　
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    https: false,
    open: true,
    // proxy: {
    //   '/index' : {
    //       target: 'http://101.231.95.205:8090',
    //       changeOrigin: true,
    //       // pathRewrite: {
    //       //     '^/index': ''
    //       // }
    //   }
    // }
  },
}