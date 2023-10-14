import React from "react";

export default function Button({ handleEvent, style, label }) {
  return (
    <button onClick={handleEvent} className={`${style}`}>
      {label}
    </button>
  );
}
