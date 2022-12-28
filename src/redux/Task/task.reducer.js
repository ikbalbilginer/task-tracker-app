import taskTypes from "./task.types";
import colors from "../../constants/colors";

const INITIAL_STATE = {
  loading: false,
  taskList: [],
  priorities: [
    {
      color: colors.red,
      name: "Urgent",
    },
    {
      color: colors.orange,
      name: "Regular",
    },
    {
      color: colors.blue,
      name: "Trivial",
    },
  ],
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskTypes.CREATE_NEW_TASK:
      var tasks = [...state.taskList, action.payload];
      return {
        ...state,
        loading: true,
        taskList: tasks,
      };
    case taskTypes.START_GET_PRIORITIES:
      return {
        ...state,
        loading: true,
      };
    case taskTypes.SET_PRIORITIES:
      return {
        ...state,
        loading: false,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
