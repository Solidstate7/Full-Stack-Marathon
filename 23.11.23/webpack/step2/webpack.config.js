const path = require("path");

module.exports = {
  // Entry
  entry: "./src/index.js",

  module: {
    rules: [
      {
        // file extension
        test: /\.css$/,
        // .css 파일 읽어옴
        // 어떤 로더로 이 파일 읽을 것인가
        // style-loader, css-loader : css file 찾고, html 문서 헤드 style 생성
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
