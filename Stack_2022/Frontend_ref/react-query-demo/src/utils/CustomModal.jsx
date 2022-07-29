import "./customModal.css";
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import { edit_todo_mutation } from "./TodoQueries";

export const CustomModal = (props) => {
  const { isOpen, onClose, id } = props
  const [text, setText] = useState("")
  const [changeStatus, setChangeStatus] = useState("")
  // Access the client
  const queryClient = useQueryClient()

  console.log("ID15-->", id);
  //for Editing the todo from db
  const edit_todo_mutation = useMutation(
    async (updatedTodo) => {
      return await axios.patch(`http://localhost:4000/Todo/${id}`, updatedTodo);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["todo"]);
      },
    }
  );

  //for editing the todo into db
  const EditTodo = () => {
    if (text.length !== 0) {
      edit_todo_mutation.mutate({
        title: text,
      })
      onClose();
    }
    else if (changeStatus.length !== 0) {
      edit_todo_mutation.mutate({
        status: changeStatus
      })
      onClose();
    }
    // console.log("ID-->", id);
    onClose();
    setText("")
  }



  if (!isOpen) {
    return null
  }

  return (
    <div className='overlay'>
      <div className="modalcontainer">
        <h2>Hey, I'm Modal</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aut velit excepturi voluptatum quisquam, totam quam. In maiores placeat, veritatis qui, labore a sint assumenda sapiente et doloribus ut dolore.
        </p>

        <input className="edit-input" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="edit text..." />

        <div className="status_div">
          <div>
            <label htmlFor="">Status  </label>
            <select className="ctr_btn" onChange={(e) => setChangeStatus(e.target.value)}>
              <option value="in_progress" selected disabled>Select the status</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button className="edit_btn" onClick={EditTodo}>Update</button>
        </div>
      </div>

      <div className="btnContainer">
        <button className="close_btn" onClick={onClose}>X</button>
      </div>
    </div>
  )
}
