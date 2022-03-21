import SimpleReact from './src/simple-react';
import SimpleReactDom from './src/simple-react-dom';

console.log("SimpleReact",SimpleReact,"SimpleReactDom",SimpleReactDom)

/**增加这这行注释，使React.createElement编译为SimpleReact */
/** @jsx SimpleReact.createElement */
const element = <div>
    <p>Hello React</p>
    <p>Hello World</p>
</div>;

console.log("element",element)
SimpleReactDom.render(element,document.querySelector("#root"))
