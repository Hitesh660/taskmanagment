import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './redux/fetures/TaskSlice';


export const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [taskName, setTaskName] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.body);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, taskName, description, status }));
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <div className="z-2 position-absolute bg-primary p-3 w-auto rounded-2">
          <p className="fs-4 fw-bold">Edit Task</p>
          <input
            type="text"
            placeholder="Task Title"
            className="input-field mt-2 py-2 px-2 w-100"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            className="input-field py-1 px-2 mt-2 w-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className="input-field py-2 px-2 mt-2 w-100"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
          <div className="d-flex justify-content-evenly mt-3">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-outline-light"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      )}
    </div>
  );
};