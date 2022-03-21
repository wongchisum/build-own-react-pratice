const TextType = "TEXT_ELEMENT";

export function render(element, conatiner) {
  /**
   * 创建真实的DOM元素（区分文字元素与其他DOM元素)
   * 挂载在容器上,将除了children以外的属性挂载在DOM元素上
   * 子元素进行递归渲染
   */
  const { type, props } = element;
  const dom =
    type === TextType
      ? document.createTextNode("")
      : document.createElement(type);
  Object.keys(props)
    .filter((prop) => prop !== "children")
    .forEach((prop) => (dom[prop] = props[prop]));

  const { children = [] } = element.props;
  Array.isArray(children) && children.forEach((child) => render(child, dom));

  conatiner.appendChild(dom);
}
