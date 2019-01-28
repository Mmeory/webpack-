var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[hash:8]index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        filename: '[hash:8].[name].html',
        template: './src/main.html',
        minify:true
    })]
};
// title : 用于生成的HTML文件的标题。

// filename : 用于生成的HTML文件的名称，默认是index.html。你可以在这里指定子目录（例如:assets/admin.html）

// template : 模板的路径。支持加载器，例如 html!./index.html。

// inject :true
//  | ‘head’ | ‘body’ | false 。把所有产出文件注入到给定的 template 或templateContent。当传入
//  true或者 ‘body’时所有javascript资源将被放置在body元素的底部，“head”则会放在head元素内。

// favicon : 给定的图标路径，可将其添加到输出html中。
// 和 title 属性一样 如果在 html 模板中设置了 favicon 则会忽略这个属性。

// minify : {…}
//  | false 。传一个html-minifier 配置object来压缩输出。

// hash : true
//  | false。如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。

// cache : true
//  | false 。如果传入true（默认），只有在文件变化时才 输出（emit）文件。

// showErrors : true
//  | false 。如果传入true（默认），错误信息将写入html页面。

// chunks : 只允许你添加chunks 。（例如：只有单元测试块 ）
// 有多个文件的时候 js 文件的时候 允许你写入要添加的文件的名称。

// chunksSortMode : 在chunk被插入到html之前，你可以控制它们的排序。允许的值 ‘none’
//  | ‘auto’ | ‘dependency’ | {function} 默认为‘auto’.

// excludeChunks : 允许你跳过一些chunks（例如，不要单元测试的 chunk）.

// xhtml : 用于生成的HTML文件的标题。

// title : true
//  | false。如果是true，把link标签渲染为自闭合标签，XHTML要这么干的。默认false。

// https://blog.csdn.net/sunscheung/article/details/75309194 讲解的比较详细。

