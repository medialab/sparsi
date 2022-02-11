import React from "react";
import { useAtom } from "jotai";
import { method } from "./atoms";

export default function SelectMethod() {
  const [, setMethod] = useAtom(method);
  return (
    <div className="select">
      <select>
        <option onClick={() => setMethod("weight threshold")}>
          weight threshold
        </option>
        <option onClick={() => setMethod("simmelian backbone")}>
          simmelian backbone
        </option>
        <option onClick={() => setMethod("edge disparity")}>
          edge disparity
        </option>
      </select>
    </div>
  );
}
