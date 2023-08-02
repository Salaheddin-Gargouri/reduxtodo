import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../redux/actionTaype";
import { Addtask, filterTask } from "../redux/action";
import { Button } from "react-bootstrap";

const AddTask = () => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const handelSabmit = (e) => {
    e.preventDefault();
    const newtext = { id: Math.random(), tache: text, isDone: true };
    text.trim() === "" ? alert("Add tasks") : dispatch(Addtask(newtext));
    settext("");
  };
  return (
    <div>
      <h3 style={{ color: "#E0C21A", paddingTop: "50px" }}> TODO List</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form action="" onSubmit={handelSabmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="what's your plan today?"
          ></input>
          <Button
            style={{
              marginLeft: "10px",
              marginRight: "10px",
            }}
            variant="outline-info"
            type="submit"
          >
            {" "}
            Add{" "}
          </Button>
        </form>
        <Button variant="outline-info" onClick={() => dispatch(filterTask())}>
          {" "}
          filter{" "}
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
