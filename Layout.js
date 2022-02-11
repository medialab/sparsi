import React from "react";
import FA2Layout from "graphology-layout-forceatlas2/worker";
import NoverlapLayout from "graphology-layout-noverlap/worker";
import { graphAtom } from "./atoms";
import { useAtom } from "jotai";

export default function Layout() {
  const [graph] = useAtom(graphAtom);

  if (graph == null)
    return (
      <div className="box" id="layout">
        Loading ...
      </div>
    );

  const layout = new FA2Layout(graph, {
    settings: { gravity: 1 },
    weighted: true,
  });

  const noverlap = new NoverlapLayout(graph);

  return (
    <div className="box" id="layout">
      <h2>Layout</h2>
      <p id="forceatlas">ForceAtlas2</p>
      <div className="columns">
        <div className="column">
          <button
            className="button"
            onClick={() => {
              if (!layout.isRunning()) {
                layout.start();
              }
            }}
          >
            ▶
          </button>
        </div>
        <div className="column">
          <button
            className="button"
            onClick={() => {
              if (layout.isRunning()) {
                layout.stop();
              }
            }}
          >
            ■
          </button>
        </div>
      </div>
      <p id="noverlap">Noverlap</p>
      <div className="columns">
        <div className="column">
          <button
            className="button"
            onClick={() => {
              if (!noverlap.isRunning()) {
                noverlap.start();
              }
            }}
          >
            ▶
          </button>
        </div>
        <div className="column">
          <button
            className="button"
            onClick={() => {
              if (noverlap.isRunning()) {
                noverlap.stop();
              }
            }}
          >
            ■
          </button>
        </div>
      </div>
    </div>
  );
}
