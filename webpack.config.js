// webpack 설정. 모듈 번들러로, 프로젝트의 파일들을 하나로 번들링함.

const path = require('path');

module.exports = {
  entry: './client/src/index.js',  // 번들링을 시작할 파일
  output: {
    filename: 'bundle.js',         // 번들링 결과물의 파일명
    path: path.resolve(__dirname, 'client/src/dist'),  // 번들링 결과물의 경로
  },
  module: {
    rules: [
      {
        test: /\.js$/,          // .js 확장자를 가진 파일에 대해서만
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: {
          loader: 'babel-loader', // Babel을 사용하여 JavaScript 파일을 변환
        },
      },
      {
        test: /\.css$/,         // .css 확장자를 가진 파일에 대해서만
        use: ['style-loader', 'css-loader'], // style-loader, css-loader를 사용하여 CSS 파일을 번들링
      },
    ],
  },
};
