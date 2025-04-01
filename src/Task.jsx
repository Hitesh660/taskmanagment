import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { MyButton } from './Button';
import { Tasklist } from './Tasklist';
import { addTask } from './redux/fetures/Taskslice';
``

export const Task = () => {
  const [taskname, settaskname] = useState('');
  const [status, setstatus] = useState('To Do');
  const [desc, setdesc] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskname.trim() || !desc.trim()) {
      setError('All fields are required');
      return;
    }

    const newtask = {
      id: Date.now(), // Unique ID for each task
      title: taskname,
      status,
      body: desc,
    };

    dispatch(addTask(newtask));
    settaskname('');
    setdesc('');
    setstatus('To Do');
    setError('');
  };

  return (
    <Mysection>
      <div className="container justify-content-center align-items-center form-container p-1 px-2">
        <div className="col-12">
          <div className="row justify-content-center align-items-center">
            <center>
              <h1 className="mt-3 fw-bold">Task Management App</h1>
            </center>
            <p className="fs-4 ps-4">Add New Task</p>
            <form
              className="d-flex flex-column justify-content-center align-items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Task Name"
                className="input-field mt-3 py-2 px-4"
                value={taskname}
                onChange={(e) => settaskname(e.target.value)}
              />
              <textarea
                placeholder="Task Description"
                className="input-field py-1 px-4 mt-3"
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
              />
              <select
                className="input-field mt-3 py-2 px-4 mt-4"
                value={status}
                onChange={(e) => setstatus(e.target.value)}
              >
                <option value="To Do">To Do</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>
              {error && <p className="text-danger mt-2">{error}</p>}
              <MyButton className="mt-3" type="submit">
                Add Task
              </MyButton>
            </form>
          </div>
          <Tasklist />
        </div>
      </div>
    </Mysection>
  );
};

const Mysection = styled.section`
  margin-top: 100px;
  color: #ffffff;
  overflow: hidden;

  .form-container {
    overflow: hidden;
    width: 43vw;
    height: auto;
    border: 2px solid #ffffff;
    background: #0e2d5d;
    border-radius: 14px;
    padding: 20px;
  }

  .input-field,
  select {
    border-radius: 10px;
    border: 3px inset #006eff;
    width: 700px;
  }
`;
