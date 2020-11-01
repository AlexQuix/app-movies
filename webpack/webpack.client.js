const path = require("path");

// PLUGINS
const HTMLWebpackPlugin = require("html-webpack-plugin");

// LOADERS
const JSLoader = {
    test: /\.js(x)?$/,
    loader: "babel-loader",
    options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
    }
};

module.exports = {
    mode: "development",
    entry: "./src/App.jsx",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "public/js/App.js"
    },
    module: {
        rules: [
            JSLoader
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