# Webpack

## Installation 설치

### Basic Install 기본 설치

```shell
npm i -D webpack webpack-cli
```

- package.json `"main": "index.js"` 를 삭제하고 `"private": true`를 추가한다.
- 왜냐하면 접근을 막기위해서

```shell
npm i -D lodash
```

- lodash 라이브러리를 설치해주는데, 이유는 index.js안에 사용된 문법이 lodash 문법(\_)이기 때문이다.

## Configuration 환경설정

- 원래 4 버전부터 필요없는데, 기존의 프로젝트들의 파일을 위해 존재한다. - `webpack.config.js`

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js', // 파일을 묶을 입구
  output: {
    filename: 'main.js', // 결과물 이름
    path: path.resolve(__dirname, 'dist'), // 생성될 폴더
  },
};
```

## Loaders

### Loading CSS

```shell
npm i -D style-loader css-loader
```

- In order to import a CSS file from within a JavaScript module, need the style-loader and css-loader

```javascript
 // add module in webpack.config.js
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // 자바스크립트에서 import "./style.css" 사용가능하게된다.
      },
    ],
  },
```

### Loading Images Like logos, bgs In Webpack 5 use built-in Asset Modules

```json
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i, // 정규식 .으로 시작해서 쟤네로 끝나는 것이 있냐
  type: 'asset/resource',
}
```

```javascript
import Icon from './icon.png';
// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

element.appendChild(myIcon);

return element;
```

### Loading Fonts

- font 파일들도 로드할 수 있다.

```json
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
},
```

- stylesheet에서 해당 경로를 불러서 사용할 수 있다.

```css
@font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'), url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
```

- woff2, woff로 설정했을 시 폰트로 읽을 수 있다. ttf, otf 백날 포맷해봤자 화면에 렌더링 안된다.

### Loading Data

- JSON files, CSVs, TSVs, and XML. Support for JSON the csv-loader and xml-loader

```shell
npm i -D csv-loader xml-loader
```

```json
// csv 와 xml 로더
{
  test: /\.(csv|tsv)$/i,
  use: ['csv-loader'],
},
{
  test: /\.xml$/i,
  use: ['xml-loader'],
},
// No warning
import data from './data.json';

// Warning shown, this is not allowed by the spec.
import { foo } from './data.json';
```

#### toml yaml json5 형태의 파일들도 JSON으로 받을 수 있다

```shell
npm i -D toml yamljs json5
```

```javascript
//webpack.config.js
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
/////////
{
  test: /\.toml$/i,
  type: 'json',
  parser: {
    parse: toml.parse,
  },
},
{
  test: /\.yaml$/i,
  type: 'json',
  parser: {
    parse: yaml.parse,
  },
},
{
  test: /\.json5$/i,
  type: 'json',
  parser: {
    parse: json5.parse,
  },
},
```
