import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/action";

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [etext, setEtext] = useState(task.tache);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  const handledit = (e) => {
    e.preventDefault();
    const editedtask = { id: task.id, tache: etext, isDone: task.isDone };
    dispatch(editTask(editedtask));
    handleClose();
  };
  return (
    <div>
      <Button
        variant="outline-info"
        style={{ marginRight: "10px", marginLeft: "10px" }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handledit}>
            <input
              type="text"
              value={etext}
              onChange={(e) => setEtext(e.target.value)}
            ></input>
            <Button variant="outline-info" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-info" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTask;
