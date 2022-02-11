import React from "react";

export default function Rescale({ renderer }) {
  const camera = renderer.getCamera();
  return (
    <div className="is-1" id="rescale-button">
      <button
        className="button"
        onClick={() => camera.animatedReset({ duration: 600 })}
      >
        ⊙
      </button>
    </div>
  );
}
