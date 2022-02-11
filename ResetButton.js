import { useAtom } from "jotai";
import React from "react";
import { graphAtom, minWeightAtom, thresholdAtom } from "./atoms";

export default function ResetButton() {
  const [graphe] = useAtom(graphAtom);
  const [threshold, setThreshold] = useAtom(thresholdAtom);
  const [minimumWeight] = useAtom(minWeightAtom);
  function Reset() {
    setThreshold(minimumWeight);
    graphe.forEachEdge(function (edge) {
      graphe.setEdgeAttribute(edge, "color", "000000");
    });
  }
  return (
    <button className="button" onClick={() => Reset()}>
      reset
    </button>
  );
}
