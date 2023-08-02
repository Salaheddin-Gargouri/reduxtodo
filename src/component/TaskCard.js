import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/action";
import Button from "react-bootstrap/Button";
import EditTask from "./EditTask";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <h3
        style={{ width: "200px", height: "30px", color: "#E0C21A" }}
        id={task.isDone ? "✓" : "unc"}
      >
        {task.tache}
      </h3>
      <Button
        variant="outline-danger"
        style={{ margin: "10px" }}
        onClick={() => dispatch(deleteTask(task.id))}
      >
        X
      </Button>{" "}
      <Button
        variant="outline-success"
        onClick={() => dispatch(completeTask(task.id))}
      >
        {task.isDone ? "✓" : "Uncomplete"}
      </Button>
      <EditTask task={task} />
    </div>
  );
};

export default TaskCard;
