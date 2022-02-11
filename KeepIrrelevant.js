import React from "react";
import { useAtom } from "jotai";
import { keepIrrelevantAtom } from "./atoms";

export default function KeepIrrelevant() {
  const [keepIrrelevant, setKeepIrrelevant] = useAtom(keepIrrelevantAtom);
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        onClick={() => setKeepIrrelevant(!keepIrrelevant)}
      />
      Keep irrelevant nodes and edges
    </label>
  );
}
