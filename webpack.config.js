/**
 * base:公共配置
 *  entry: 描述入口位置
 *  output: 描述输出的位置
 *  module:模块如何加载和转化
 *  plugins:编译过程中加载插件
 */
const path = require("path");
const ProcessPlugin = require("webpack").ProgressPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 工具函数，转化相对路径为绝对路径
const pathResolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  mode: "development",
  entry: pathResolve("./V2Main.jsx"),
  output: {
    path: pathResolve("./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" }, // <style></sctyle>
          {
            loader: "css-loader", // 转译 css -> js
          },
          { loader: "less-loader" }, // less - css
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: pathResolve("./template/index.html") }),
    new ProcessPlugin(),
  ],
};
