  // 导入compression-webpack-plugin
  const CompressionWebpackPlugin = require("compression-webpack-plugin");
  // 定义压缩文件类型
  const productionGzipExtensions = ["js", "css"];
module.exports = {
  productionSourceMap: false,
    configureWebpack: {
      // externals: {
      //   'vue': 'Vue',
      //   'vue-router': 'VueRouter',
      //   'axios': 'axios',
      //   // 'element-ui': 'ElementUI',
      // },
      resolve: {
        alias: {
          'components': '@/components',
          'content': 'components/content',
          'common': 'components/common',
          'assets': '@/assets',
          'network': '@/network',
          'views': '@/views',
        }
      },
         //开启gzip压缩,减少为文件体积，提高加载速度
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"), //匹配文件名
        threshold: 10240, //对10K以上的数据进行压缩
        minRatio: 0.8,
        deleteOriginalAssets: false //是否删除源文件
      })
    ],
    },
  
     



 
 

  }
  