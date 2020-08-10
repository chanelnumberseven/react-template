import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Layout } from 'antd'
import HeaderBar from './header'
import SideBar from './side'
import loadable from '@loadable/component'
import Loading from './../components/loading'
const { Header, Sider, Content } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100%' }}>
        <Header>
          <HeaderBar></HeaderBar>
        </Header>
        <Layout>
          <Sider>
            <SideBar></SideBar>
          </Sider>
          <Content>
            <AppRoute />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

function AppRoute() {
  return (
    <Switch>
      <Route path="/a" component={loadable(()=>import('./../views/a'),{fallback:<Loading/>})}></Route>
      <Route path="/b" component={loadable(()=>import('./../views/b'),{fallback:<Loading/>})}></Route>
      <Route path="/c" component={loadable(()=>import('./../views/c'),{fallback:<Loading/>})}></Route>
      <Route path="/">root</Route>
    </Switch>
  )
}

export default App;
