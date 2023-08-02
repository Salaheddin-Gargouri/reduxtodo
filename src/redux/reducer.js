import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDITE_TASK,
  FILTER_TASK,
} from "./actionTaype";

const init = {
  tasks: [
    { id: Math.random(), tache: "learn HTML", isDone: true },
    { id: Math.random(), tache: "learn Redux", isDone: true },
    { id: Math.random(), tache: "learn C++", isDone: false },
  ],
  filter: false,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case FILTER_TASK:
      return { ...state, filter: !state.filter };
    case EDITE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) => (el.id === payload.id ? payload : el)),
      };
    default:
      return state;
  }
};
export default reducer;
