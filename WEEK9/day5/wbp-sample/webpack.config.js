// console.log(__dirname);
module.exports = {
    devtool: "eval-source-map", // 生成sourcemap
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',

    }
};
