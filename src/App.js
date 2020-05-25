import React, { Component } from 'react';
// 等价于
// import React from 'react'
// const Component = React.Component
import { Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Mine from "./pages/Mine"

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/mine">我的</Link>
          </li>
        </ul>

        {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
        <Route path='/' exact component={Home}></Route>
        <Route path='/mine' component={Mine}></Route>
      </>
    )
  }
}

export default App;
