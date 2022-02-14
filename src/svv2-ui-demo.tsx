import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

import "./root.styles.scss";

document.title = "Single View Front-End Prototype - Hackney Council";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return (
      <h1>Something has gone wrong loading the single view application.</h1>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
