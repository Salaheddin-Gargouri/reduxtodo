import { ADD_TASK, DELETE_TASK, EDITE_TASK, FILTER_TASK } from "./actionTaype";
import { COMPLETE_TASK } from "./actionTaype";
export const deleteTask = (TaskID) => {
  return {
    type: DELETE_TASK,
    payload: TaskID,
  };
};
export const completeTask = (TaskID) => {
  return {
    type: COMPLETE_TASK,
    payload: TaskID,
  };
};
export const Addtask = (newtask) => {
  return {
    type: ADD_TASK,
    payload: newtask,
  };
};
export const filterTask = () => {
  return {
    type: FILTER_TASK,
  };
};
export const editTask = (editedtask) => {
  return {
    type: EDITE_TASK,
    payload: editedtask,
  };
};
