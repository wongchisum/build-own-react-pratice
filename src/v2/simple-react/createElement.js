/**
 * createTextElement和createElement都是用于生成react element对象
 * react element对象的大致结构为:
 * {
 *    type:"div",
 *    props:{
 *      id:"intro"
 *    }
 *    children:"Hello"
 * }
 * 区别在于对于文本属性，调用createTextElement方法，手动增加一个type TEXT_ELEMENT
 * createElement处理属性，递归去生成一个对象
 */


/**
 * 创建文本节点的元素对象
 * @param {*string} 文本
 * @returns 
 */
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

/**
 * 创建宿主元素的对象
 * @param {*string} type 元素的类型
 * @param {*object} props 元素的属性
 * @param  {...any[]} children 
 * @returns 
 */
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "object" ? child : createTextElement(child);
      }),
    },
  };
}
