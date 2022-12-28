import React from "react";
import "./style.scss";
import { FaPlus } from "react-icons/fa";

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="add-btn">
      <FaPlus style={{ marginRight: "10px" }} />
      {children}
    </button>
  );
}

export default Button;
