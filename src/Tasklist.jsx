import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo,removeTask } from "./redux/fetures/TaskSlice";

import styled from "styled-components";
import { EditTask } from "./Edittask";

export const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  if (loading) return <p>Task Loading....</p>;
  if (error) return <p>Error Occurred: {error}</p>;
  if (!tasks || tasks.length === 0) return <p>No tasks available</p>;

  const maxWords = 8;
  const maxTitle = 5;

  return (
    <Mytask>
      <div className="container justify-content-center align-items-center">
        <div className="col-12">
          <div className="row justify-content-center align-items-center">
            <p className="fs-4">Tasks</p>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center bg-secondaryr shadow-lg border border-white rounded mb-2 px-3 py-2"
                >
                  <div>
                    <p>{index + 1}</p>
                    <p className="task-title">
                      {task.title
                        ? task.title.split(" ").slice(0, maxTitle).join(" ") +
                          "..."
                        : ""}
                    </p>
                    <p className="task-body">
                      {task.body
                        ? task.body.split(" ").slice(0, maxWords).join(" ") +
                          "..."
                        : ""}
                    </p>
                  </div>
                  <div className="d-flex justify-content-around gap-3">
                    <EditTask  task={task}/>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => dispatch(removeTask(task.id))}
                    >                   
                       Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Mytask>
  );
};

const Mytask = styled.section`
  margin-top: 15px;
  .task-title,
  .task-body {
    font-size: 18px;
  }
  .bg-secondaryr {
    background: #0e2d5d;
  }
`;
