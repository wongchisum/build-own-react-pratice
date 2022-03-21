# build-own-react-pratice

 根据 https://pomb.us/build-your-own-react/ 进行实践

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



## **Step I**: The `createElement` Function

​		React 17之前的JSX，经过babel编译之后，都会转化为**React.createElement**的形式。

​		可以到Babel plauground尝试一下： 

​		https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRhigEsokMAiAMxBAoD4AJRBEbAegPqA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.8&externalPlugins=&assumptions=%7B%7D



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





优先实现**createElement**函数

