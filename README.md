# test2

> dfk

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 注意
代码中不要用typeof 否者打包后报Uncaught TypeError: Cannot read property 'call' of undefined

#使用Vuex, IE浏览器报错，则需要：
npm install --save babel-polyfill
在webpack.config.js文件中，使用
module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/main.js"]
  }
};



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
