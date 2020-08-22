import React from "react";
import { withRouter } from "react-router";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidMount(){
      this.resetHasError()
  }
  resetHasError() {
    this.props.history.listen((location) => {
      // 最新路由的 location 对象，可以通过比较 pathname 是否相同来判断路由的变化情况
      if (this.props.location.pathname !== location.pathname) {
        this.setState({
          hasError: false,
        });
      }
    });
  }
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
