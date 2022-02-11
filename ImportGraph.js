import React, { useState } from "react";
import { useAtom } from "jotai";
import { graphAtom, minWeightAtom, maxWeightAtom } from "./atoms";
import Graph from "graphology";
import random from "graphology-layout/random";
import louvain from "graphology-communities-louvain";

export default function ImportGraph() {
  const [g, setGraph] = useAtom(graphAtom);

  const [minimumWeight, setMinimumWeight] = useAtom(minWeightAtom);
  const [maximumWeight, setMaximumWeight] = useAtom(maxWeightAtom);

  const [imported, setImported] = useState(false);

  function fetchGraph() {
    fetch("graph2.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        var G = Graph.from(response);
        random.assign(G);
        louvain.assign(G);
        G.forEachEdge(function (edge, attr) {
          if (attr["weight"] < minimumWeight && minimumWeight != 0) {
            setMinimumWeight(attr["weight"]);
          }
          if (attr["weight"] > maximumWeight) {
            setMaximumWeight(attr["weight"]);
          }
        });
        G.forEachEdge(function (edge, attr) {
          attr = { ...attr, color: "000000" }; // noir
          G.replaceEdgeAttributes(edge, attr);
        });
        G.forEachNode(function (node, attr) {
          attr = { ...attr, color: "000000" };
          G.replaceNodeAttributes(node, attr);
        });
        setGraph(G);
        setImported(true);
        console.log("encore");
      })
      .catch((error) => alert("Erreur : " + error));
  }

  return (
    <div id="import-button">
      <button
        className="button"
        onClick={() => {
          if (imported === false) fetchGraph();
        }}
      >
        Import Graph
      </button>
    </div>
  );
}
