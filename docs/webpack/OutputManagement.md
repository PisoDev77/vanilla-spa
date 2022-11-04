# Global Assets [Webpack 공식문서](https://webpack.js.org/guides/output-management/)

## 컨셉

- Loader로 모듈화 된 파일들을 직관적으로 하나의 컴포넌트로 관리할 수 있다.

## webpack.config.js

- 파일명과 목적파일을 다중으로 지정할 수 있다.

```javascript
entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
```

## 이렇게 자바스크립트 파일들을 각각 모듈화해서 빌드할 수 있지만..

- 만약 entry 안에 index와 print 파일명이 변한다면?
- 이럴 때 html은 정적이라 변하지 않는 파일명을 가진다. 이를 해결하기 위해 `HtmlWebpackPlugin`을 사용한다.

## HtmlWebpackPlugin

```shell
npm i -D html-webpack-plugin
```

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

## Cleaning up /dist folder

```javascript
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // added
  },
```
