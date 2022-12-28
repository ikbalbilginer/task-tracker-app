import React, { useEffect, useState } from "react";
import "./styles/shared.scss";
import "./styles/main.scss";
import { Title, Header } from "./components";
import CustomInput from "./components/CustomInput";
import TaskList from "./components/TaskList";
// @ts-ignore
import Button from "./components/Button";
// import { startGetPriorities } from "./redux/Task/task.actions";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-dropdown";
import { createNewTask } from "./redux/Task/task.actions";

function App() {
  const dispatch = useDispatch();
  const { priorities } = useSelector(({ task }) => ({
    priorities: task.priorities,
  }));

  const [task, setTask] = useState({
    text: "",
    id: "",
    priority: priorities?.length && priorities[0],
  });

  const onSubmitCreate = () => {
    dispatch(createNewTask({ ...task, id: Date.now() }));
  };

  // const pr = priorities.map((p) => ({ value: p.color, label: p.name }));
  const pr = priorities?.map((p) => p.name);

  useEffect(() => {
    // dispatch(startGetPriorities());
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div>
        <Title>Create New Job</Title>
        <div className="row mt-10">
          <CustomInput
            style={{ width: "65vw" }}
            // @ts-ignore
            label="Job name"
            placeholder={"jaja"}
            onChange={(e) => setTask({ ...task, text: e.target.value })}
          />
          <Dropdown
            options={pr}
            className="dropdown"
            onChange={(opt) =>
              setTask({
                ...task,
                priority: priorities.find((p) => p.name === opt.value),
              })
            }
            value={pr?.length ? pr[0] : ""}
            placeholder="Select an option"
          />
          ;
          {/* 
          <CustomInput
            style={{
              flex: 1,
              marginLeft: "10px",
              marginRight: "10px",
            }}
            // @ts-ignore
            label="Job priority"
            placeholder={"jaja"}
          /> */}
          <Button onClick={onSubmitCreate}>Create</Button>
        </div>
      </div>
      <div className="job-list">
        <Title>Job List</Title>
      </div>
      <div className="task-container">
        <div className="task-header">
          <CustomInput placeholder={"deneme"} style={{ width: "65vw" }} />
          <CustomInput placeholder={"deneme"} style={{ flex: 1 }} />
        </div>
        <div className="task-label-container">
          <h5>Name</h5>
          <h5>Priority</h5>
          <h5>Action</h5>
        </div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
