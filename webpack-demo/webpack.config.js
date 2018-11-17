const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            // loader的加载顺序是从右到左的
            // css-loader是帮助webpack编译css文件. 而style-loader是将最终编译的结果放到HTML中生效
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
            
        ]

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//解决hot问题
        new HTMLWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 源文件
            filename: 'index.html' // 输出在服务器根目录的文件名, 文件存放在内存中, 不会在磁盘上显示
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, "src"),
        // compress: true,
        // host: '0.0.0.0',
        // port: 3000,
        // open: true,
        // hot: true
      },
    mode: 'development'
}