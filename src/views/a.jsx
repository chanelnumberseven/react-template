import React from "react";
const ThemeContext = React.createContext("light");
const AnotherContext = React.createContext("black");
export default class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    '111'.concats();
    return (
      <div>
        <AnotherContext.Provider value="orange">
          <ThemeContext.Provider value="blue">
            <Toolbar />
            <ThemeContext.Provider value="dark">
              <Toolbar />
            </ThemeContext.Provider>
          </ThemeContext.Provider>
          <AnotherContext.Consumer>
            {function (value) {
              return <button>{value}</button>;
            }}
          </AnotherContext.Consumer>
        </AnotherContext.Provider>
      </div>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    let context=this.context  
    return (
      <AnotherContext.Consumer>
        {function (value) {
          return <button>{value}-{context}</button>;
        }}
      </AnotherContext.Consumer>
    );
  }
}
