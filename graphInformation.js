import React from "react";
import { density } from "graphology-metrics/graph/density";
import { graphAtom, newGraphAtom } from "./atoms";
import { useAtom } from "jotai";

// on veut à terme les infos du graphe de départs et ceux de l'arrivée (recalculés)
// abstract density
export default function GraphInformation() {
  const [graph] = useAtom(graphAtom);
  const [newGraph] = useAtom(newGraphAtom);
  if (graph == null) {
    return <p>Loading ...</p>;
  }

  if (newGraph == null) {
    return (
      <ul>
        <li>type : {graph.type}</li>
        <li>density : {density(graph)}</li>
        <li>{graph.order} nodes</li>
        <li>{graph.size} edges</li>
      </ul>
    );
  }

  return (
    <ul>
      <li>type : {graph.type}</li>
      <li>
        density : {density(newGraph)} / {density(graph)}
      </li>
      <li>
        {newGraph.order} / {graph.order} nodes
      </li>
      <li>
        {newGraph.size} / {graph.size} edges
      </li>
    </ul>
  );
}
