const path = require("path");

// PLUGINS
const HTMLWebpackPlugin = require("html-webpack-plugin");


// LOADERS
const JSLoader = {
    test: /\.js(x)?$/,
    loader: "babel-loader",
    exclude: /node_modules/
};
const CSSLoader = {
    test: /(\.css$)/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: "public/[folder]/[name].css"
            }
        },
        "extract-loader",
        "css-loader"
    ]
}



module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "public/js/App.js"
    },
    module: {
        rules: [
            JSLoader,
            CSSLoader
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/views/index.html",
            filename: "views/index.ejs",
            inject: false
        })
    ],
    resolve: {
        extensions: [".jsx", ".js"]
    }
}