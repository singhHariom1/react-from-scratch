// src/components/HeavyComponent.jsx
import React from "react";

function HeavyComponent({ value }) {
  console.log("👀 HeavyComponent rendered");
  return (
    <div className="p-2 bg-slate-100 rounded">
      <p>📦 Heavy Component Value: {value}</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
