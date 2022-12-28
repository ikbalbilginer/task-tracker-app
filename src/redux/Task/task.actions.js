import taskTypes from "./task.types";

export const startGetPriorities = () => {
  return {
    type: taskTypes.START_GET_PRIORITIES,
  };
};

export const setPriorities = (data) => {
  return {
    type: taskTypes.SET_PRIORITIES,
    payload: data,
  };
};

export const createNewTask = (data) => {
  return {
    type: taskTypes.CREATE_NEW_TASK,
    payload: data,
  };
};
