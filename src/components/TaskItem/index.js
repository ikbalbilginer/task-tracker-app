import React from "react";
import Badge from "../Badge";
import "./style.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function TaskItem({ task }) {
  return (
    <div className="task-c">
      <p>{task.text}</p>
      <div>
        <Badge name={task.priority.name} color={task.priority.color} />
      </div>
      <div>
        <FaEdit style={{ marginRight: "44px" }} />
        <FaTrashAlt />
      </div>
    </div>
  );
}

export default TaskItem;
