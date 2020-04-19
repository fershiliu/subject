const path = require('path')

// 拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/', //为index.html中的BASE_URL变量赋值
  outputDir: 'dist', //运行npm run build之后项目打包得到的文件输出目录
  indexPath: 'index.html', //运行npm run build之后项目index.html文件输出文件名
  pages: {
    index: {
      entry: 'src/main.js', //当前SPA打包入口文件
      template: 'public/index.html', //当前SPA的首页文件的模板
      filename: 'index.html', //模板文件输出目标文件名
      title: 'my-app',
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('components', resolve('src/components'))
  }
}