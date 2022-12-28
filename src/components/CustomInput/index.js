import React from "react";
import "./style.scss";

function CustomInput({ style, label = false, placeholder, onChange }) {
  return (
    <div style={style} className="col">
      {label && <p className="label">{label}</p>}
      <input onChange={onChange} type="text" placeholder={placeholder} />
    </div>
  );
}

export default CustomInput;
