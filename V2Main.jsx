import SimpleReact from "./src/v1/simple-react";
import SimpleReactDom from "./src/v1/simple-react-dom";
import Concurrent from './src/v2/concurrent';
/**
 * 增加 SimpleReact.createElement 这这行注释，
 * 使React.createElement编译为SimpleReact.createElement
 * */
console.log("SimpleReact", SimpleReact, "SimpleReactDom", SimpleReactDom);

Concurrent.startJob()

/** @jsx SimpleReact.createElement */
const fiberDemo = (
  <div >
    <p>Hello React!</p>
    <p>Hello Fiber!</p>
  </div>
);
/**查看element的结构 */
console.log("fiberDemo",fiberDemo)

SimpleReactDom.render(fiberDemo, document.querySelector("#root"));