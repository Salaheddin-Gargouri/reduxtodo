import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state);

  return (
    <div
      className="Homeimg"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {filter
        ? tasks
            .filter((el) => el.isDone === false)
            .map((el) => <TaskCard key={el.id} task={el} />)
        : tasks.map((el) => <TaskCard key={el.id} task={el} />)}
    </div>
  );
};

export default TaskList;
