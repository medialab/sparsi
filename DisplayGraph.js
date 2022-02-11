import React from "react";
import { useAtom } from "jotai";
import { graphAtom } from "./atoms";
import GraphContainer from "./GraphContainer";
import { Sigma } from "sigma";

let sigmaContainer = document.getElementById("sigma-container");

export default function DisplayGraph() {
  const [g] = useAtom(graphAtom);

  if (g === null) {
    return <p>Importing graph ... </p>;
  }

  const sigmaRenderer = new Sigma(g, sigmaContainer);

  return <GraphContainer graphe={g} renderer={sigmaRenderer} />;
}
