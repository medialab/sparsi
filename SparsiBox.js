import React from "react";
import { useAtom } from "jotai";
import GraphInformation from "./graphInformation";
import Slider from "./Slider";
import ResetButton from "./ResetButton";
import SelectMethod from "./SelectMethod";
import KeepIrrelevant from "./KeepIrrelevant";
import { graphAtom } from "./atoms";

export default function SparsiBox() {
  const [g] = useAtom(graphAtom);
  return (
    <div className="box is-fullwidth" id="header">
      <div className="columns">
        <div className="column">
          <h2>Sparsi</h2>
          <div className="columns">
            <div className="column">
              <ResetButton />
            </div>
            <div className="column">
              <SelectMethod />
            </div>
            <div className="column">
              <Slider />
            </div>
            <div className="column">
              <KeepIrrelevant />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <h3>Graph Information</h3>
            <GraphInformation />
          </div>
        </div>
      </div>
    </div>
  );
}
