# Development [Webpack 공식문서](https://webpack.js.org/guides/development)

## 컨셉

- Loader로 모듈화 된 파일들을 직관적으로 하나의 컴포넌트로 관리할 수 있다.

## webpack.config.js

- 파일명과 목적파일을 다중으로 지정할 수 있다.

```javascript
module.exports = {
  mode: 'development', //add
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development', // add
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

## source map

- 디버깅과 에러처리등을 위해 파일을 확인할 수 있는 소스맵을 웹팩은 제공한다.

```javascript
//mode:...,
//entry: ....,
devtool: 'inline-source-map',
//...
```

## Tools

1. webpack's Watch Mode
2. webpack-dev-server ( Usually )
3. webpack-dev-middleware

### Watch Mode

1. config pacakge.json

- "watch": "webpack --watch"

### webpack-dev-server

- live-server와 webpack을 따로 실행하는 것이 아닌 webpack-dev-server로 --watch와 live-server 동시에 실행한다.

1. install

```shell
npm i -D webpack-dev-server
```

2. config webpack.config.js

```javascript
devServer: {
    static: './dist',
  },
// .....
  optimization: {
    runtimeChunk: 'single',
  },
```

- webpack-dev-server 8080포트로 서버를 기본으로 실행해준다.
- The optimization.runtimeChunk: 'single' single HTML page.

3. config package.json

```javascript
"start": "webpack serve --open",
```

### webpack-dev-middleware

```shell
npm i -D express webpack-dev-middleware
```

- webpack.config.js

```javascript
output:{
  //...
  publicPath:'/',
}
```

```json
"server": "node server.js"
```
