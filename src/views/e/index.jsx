import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Loading from "@/components/loading";

export default class componentD extends React.Component {
  render() {
    return (
      <div>
        <h1>e</h1>
        <Switch>
          <Route
            path="/e/e-a"
            component={loadable(() => import("./a"), { fallback: <Loading /> })}
          ></Route>
          <Route
            path="/e/e-b"
            component={loadable(() => import("./b"), { fallback: <Loading /> })}
          ></Route>
          <Route
            path="/e/e-c"
            component={loadable(() => import("./c"), { fallback: <Loading /> })}
          ></Route>
        </Switch>
      </div>
    );
  }
}
