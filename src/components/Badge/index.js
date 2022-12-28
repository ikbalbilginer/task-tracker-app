import React from "react";
import "./style.scss";

function Badge({ name, color }) {
  return (
    <div style={{ backgroundColor: color }} className="badge-c">
      <p className="badge-txt">{name}</p>
    </div>
  );
}

export default Badge;
