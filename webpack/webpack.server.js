const path = require("path");


const NodeLoader = {
    test: /\.node$/,
    loader: "node-loader"
}


module.exports = {
    mode: "development",
    target: "node",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            NodeLoader
        ]
    }
}