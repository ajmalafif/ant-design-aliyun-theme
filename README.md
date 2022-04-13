<h1 align="center">Personal Ant Design Theme</h1>

<div align="center">

[![npm package](https://img.shields.io/npm/v/@ajmalafif/barg-theme.svg?style=flat-square)](https://www.npmjs.org/package/@ant-design/aliyun-theme)
[![NPM downloads](http://img.shields.io/npm/dm/@ajmalafif/barg-theme.svg?style=flat-square)](http://npmjs.com/@ant-design/aliyun-theme)

> Still being experimental, welcome to try out and help us to improve it.

</div>

## Install

```bash
$ npm install @ajmalafif/barg-theme
```

## Usage

### webpack

```js
import bargTheme from '@ajmalafif/barg-theme';

// webpack.config.js: less-loader
{
  loader: 'less-loader',
  options: {
    modifyVars: bargTheme,
  },
},
```

### umi

[https://umijs.org/config/#theme](https://umijs.org/config/#theme)

```js
import bargTheme from '@ajmalafif/barg-theme';

// config.js or .umirc.js
export default {
  "theme": bargTheme,
}
```

> Use in Ant Design Pro: https://github.com/ant-design/ant-design-pro/pull/2946/

### less

```less
@import "~@ajmalafif/barg-theme/index.less";
```
