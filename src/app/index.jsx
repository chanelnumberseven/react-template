import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderBar from "./header";
import SideBar from "./side";
import Loading from "@/components/loading";
import Page404 from "@/components/404";
import Crumb from "@/components/crumb";
import Error from "@/components/error";

const { Header, Sider, Content } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: "100%" }}>
        <Header>
          <HeaderBar></HeaderBar>
        </Header>
        <Layout>
          <Sider>
            <SideBar></SideBar>
          </Sider>
          <Content>
            <Error>
              <Crumb></Crumb>
              {process.env.REACT_APP_NOT_SECRET_CODE}
              <AppRoute />
            </Error>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

function AppRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/a" component={lazy(() => import("@/views/a"))}></Route>
        <Route path="/c" component={lazy(() => import("@/views/c"))}></Route>
        <Route
          path="/d"
          component={lazy(() => import("@/views/d/index"))}
        ></Route>
        <Route
          path="/e"
          component={lazy(() => import("@/views/e/index"))}
        ></Route>
        <Route exact path="/">
          root
        </Route>
        <Route path="*" children={<Page404 />}></Route>
      </Switch>
    </Suspense>
  );
}

export default App;
