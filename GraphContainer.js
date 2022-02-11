import React, { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { thresholdAtom, keepIrrelevantAtom, newGraphAtom } from "./atoms";
import Rescale from "./Rescale";

export default function GraphContainer({ graphe, renderer }) {
  const [threshold] = useAtom(thresholdAtom);
  const [keepIrrelevant] = useAtom(keepIrrelevantAtom);
  const [newGraph, setNewGraph] = useAtom(newGraphAtom);
  let edgeColor;
  let graph_copy;

  const rendererRef = useRef(null);
  rendererRef.current = renderer;

  useEffect(
    function () {
      graphe.forEachEdge(function (edge, attr) {
        if (attr["weight"] < threshold && !keepIrrelevant) {
          console.log("ok");
          graphe.setEdgeAttribute(edge, "color", "#ffffff");
        }

        if (attr["weight"] < threshold && keepIrrelevant) {
          console.log(" ok");
          graphe.setEdgeAttribute(edge, "color", "#cecece");
        }

        if (attr["weight"] > threshold) {
          console.log("ok");
          graphe.setEdgeAttribute(edge, "color", "000000");
        }
      });

      if (newGraph == null) {
        graph_copy = graphe.copy();
        graph_copy.forEachEdge(function (edge, attr) {
          edgeColor = graph_copy.getEdgeAttribute(edge, "color");
          console.log(edgeColor);
          if (edgeColor == "#cecece" || edgeColor == "#ffffff") {
            graph_copy.dropEdge(edge, attr);
            console.log("here");
          }
        });
        console.log(graph_copy.edges().length);
      } else {
        graph_copy = newGraph;
        graph_copy.forEachEdge(function (edge, attr) {
          edgeColor = graph_copy.getEdgeAttribute(edge, "color");
          console.log(edgeColor);
          if (edgeColor == "#cecece" || edgeColor == "#ffffff") {
            graph_copy.dropEdge(edge, attr);
            console.log("here");
          }
        });

        console.log(graph_copy.edges().length);
      }
      setNewGraph(graph_copy);
      console.log(graph_copy.edges().length);

      renderer.refresh();
    },
    [threshold, keepIrrelevant]
  );

  return (
    <div ref={rendererRef}>
      <Rescale renderer={renderer} />
    </div>
  );
}
