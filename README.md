# **build-own-react-pratice**

## 项目简介：

 根据 https://pomb.us/build-your-own-react/ 进行实践，通过实现React源代码的方式去了解React的架构。

---

## 项目目标：

- [x] 实现第一个版本的简易React,包含createElement方法和render方法（v1）

---

## 项目结构：

- webpack+webpack dev server+若干插件:用于打包并启动预览服务

- babel:转译jsx

---

## 启动项目:

```
// 拉取项目源代码
https://github.com/wongshisum/build-own-react-pratice.git

// 进入项目主体
cd ./build-own-react-pratice

// 安装依赖
yarn 

// 启动项目
yarn dev
```

---

## Step Zero: Review

复习一下react组件的渲染

```
// 声明React元素，并挂载并渲染在真实的DOM元素上

import * as React from 'react';
import ReactDOM from 'react-dom'

const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")

ReactDOM.render(element, container)
```

在这个简单的渲染示例中，我们使用到React提供的两个API:

React.createElement:通过元素的属性和类型，生成react element对象

ReactDOM.render:将生成的react element对象生成相应的dom元素，挂载并渲染。

我们首先需要实现这两个API。

---

## **Step I**: The `createElement` Function

​React 17之前的JSX，经过babel编译之后，都会转化为**React.createElement**的形式。

​   

 可以到Babel plauground尝试一下： 

​        https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRhigEsokMAiAMxBAoD4AJRBEbAegPqA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.8&externalPlugins=&assumptions=%7B%7D

大致的转化:

```
// 转化前
const element = <h1 title="foo">Hello</h1>

// babel转化后
const element = React.createElement(
  "h1",
  { title: "foo" },
  "Hello"
)

// React.createElement调用后返回的形式(使用type描述元素的类型，使用props描述元素的属性)
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}
```

优先实现**createElement**函数,实现JSX转化为react element对象。

**createElement**的实现，暂且只考虑宿主dom元素(如div/input等元素)和文本元素的生成。我们通过babel的转化，可以看到createElement的函数大概是这样的一个形式，具体的详细思路可以参考

src\v1\simple-react\createElement.js

```
// type:元素的类型
// props:元素的属性
// children:子元素
const createElement = (type,props,...children) => {

}
```
