import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import TaskItem from "../TaskItem";

function TaskList({ taskList }) {
  return (
    <div style={{ flexDirection: "row" }}>
      {taskList?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

const mapState = ({ task }) => ({
  taskList: task.taskList,
});

export default connect(mapState)(TaskList);
