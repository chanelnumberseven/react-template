import loadable from "@loadable/component";
import React from "react";
import Loading from "./loading";

export default function (src) {
  let Component = loadable(() => import(`./../views/${src}`), {
    fallback: <Loading />,
  });
  return <Component />;
}
