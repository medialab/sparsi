import React, { useState, useEffect, useRef, useCallback } from "react";
import { atom, useAtom } from "jotai";

import { method, thresholdAtom, minWeightAtom, maxWeightAtom } from "./atoms";

export default function Slider() {
  const [threshold, setThreshold] = useAtom(thresholdAtom);
  const [minimumWeight] = useAtom(minWeightAtom);
  const [maximumWeight] = useAtom(maxWeightAtom);

  if (maximumWeight == 0) {
    return (
      <div>
        threshold <br />
        Loading ...
      </div>
    );
  }

  return (
    <div>
      threshold : {threshold}
      <input
        type="range"
        id="threshold"
        min={minimumWeight}
        max={maximumWeight}
        defaultValue={minimumWeight}
        onChange={(event) => setThreshold(event.target.value)}
      />
    </div>
  );
}
