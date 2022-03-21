const TextType = "TEXT_ELEMENT";

/**
 * 使用生成的react element对象进行渲染
 * 备注：字符串没有经过createElement方法进行处理，直接进入render方法，所以直接渲染
 * @param {*react element|string} element :react element对象或字符串
 * @param {*HTMLElement} conatiner :需要挂载的html元素
 */
export function render(element, conatiner) {

  // 处理文本节点，不是jsx类型，没有经过createElement方法，直接渲染
  if (typeof element === "string" && !element.type) {
    const dom = document.createTextNode(element);
    conatiner.appendChild(dom);
  } else {
    // 处理元素
    const { type, props } = element;
    const dom =
      type === TextType
        ? document.createTextNode("")
        : document.createElement(type);
    // 除了children的其他属性，挂载在dom元素上
    Object.keys(props)
      .filter((prop) => prop !== "children")
      .forEach((prop) => (dom[prop] = props[prop]));
  
    const { children = [] } = element.props;
    Array.isArray(children) && children.forEach((child) => render(child, dom));
  
    conatiner.appendChild(dom);
  }
}
