# v2文档:

## 版本简介（未实现）:

v1版本的渲染是递归调用渲染的，无法被打断，在组件层级较深或者层元素数量较多的情况下，渲染的用时可能过长。这样会导致渲染的函数阻塞进程。

需要实现**Concurrent Mode**(并发模式)，将当前的渲染工作进行分解，当没有其他优先级较高的任务时，去执行某一部分的渲染工作。

并发模式的实现我们通过浏览器的requestIdleCallback函数去实现，可以理解成是一个setTimeout，但是它会在浏览器的闲置时机下调用，避免阻塞的情况。

通过我们需要一个数据结构去描述当前的元素状态，以及更新后的元素状态。用于更好调度我们的渲染工作，所以我们需要学习React的**Fiber**数据结构。

---

## Fiber概述：

// Todo 

![](https://github.com/wongshisum/build-own-react-pratice/blob/main/src/v2/fiber.jpg?raw=true "Fiber结构")

Fiber结构可以轻易查询子级节点(child)，

以及父级节点(parent),

兄弟节点(sibling)

---

## 版本评价：

// Todo
