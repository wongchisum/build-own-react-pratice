import SimpleReact from "./src/v1/simple-react";
import SimpleReactDom from "./src/v1/simple-react-dom";
/**
 * 增加 SimpleReact.createElement 这这行注释，
 * 使React.createElement编译为SimpleReact.createElement
 * */
console.log("SimpleReact", SimpleReact, "SimpleReactDom", SimpleReactDom);

/**文本元素的渲染，没有经过SimpleReact.createElement */
// const element = "Hello React!";

/**
 * 宿主元素的渲染，经过SimpleReact.createElement处理
 * 输出为一个react element对象：
*/
/** @jsx SimpleReact.createElement */
const element = (
  <div id="intro">
    <p>Hello React!</p>
  </div>
);
/**查看element的结构 */
console.log("element",element)

SimpleReactDom.render(element, document.querySelector("#root"));
