import React from "react";

import { render } from "react-dom";

import DisplayGraph from "./DisplayGraph";
import ImportGraph from "./ImportGraph";
import SparsiBox from "./SparsiBox";
import Layout from "./Layout";

import { scaleLinear } from "d3-scale";

import "./style.css";

console.log("oui");

const container = document.getElementById("app");

function Application() {
  return (
    <div className="container">
      <SparsiBox />
      <ImportGraph />
      <DisplayGraph />
      <Layout />
    </div>
  );
}

render(<Application />, container);
