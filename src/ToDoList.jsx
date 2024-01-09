import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Write journal"]);
  const [newTask, setNewTask] = useState("");

  function handleTaskInputChange(e) {
    setNewTask(() => e.target.value);
  }

  return (
    <div className="container">
      <h1 className="title">To-Do-List</h1>
      <div class="form-control">
        <input
          type="text"
          id="taskInput"
          placeholder="Add task"
          className="form-input"
          onChange={(e) => handleTaskInputChange(e)}
        />
        <button class="btn btn-add">Add</button>
      </div>

      <ol className="ordered-list">
        {tasks.map((task, index) => {
          return (
            <li className="list-items">
              <span className="txt-task">{task}</span>
              <button className="btn btn-delete">Delete</button>
              <button className="btn btn-up">Up</button>
              <button className="btn btn-down">Down</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ToDoList;
