import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Write journal"]);
  const [newTask, setNewTask] = useState("");

  function handleTaskInputChange(e) {
    setNewTask(() => e.target.value);
  }

  function addTask() {
    // Add new tasks to array of tasks
    setTasks((t) => [...t, newTask]);

    // Empty the value of task-input
    document.getElementById("taskInput").value = "";
  }

  function deleteTask(index) {
    const filterTaskFunction = tasks.filter((_, i) => i !== index);
    setTasks(filterTaskFunction);
  }

  return (
    <div className="container">
      <h1 className="title">To-Do-List</h1>
      <div className="form-control">
        <input
          type="text"
          id="taskInput"
          placeholder="Add task"
          className="form-input"
          onChange={(e) => handleTaskInputChange(e)}
        />
        <button className="btn btn-add" onClick={addTask}>
          Add
        </button>
      </div>

      <ol className="ordered-list">
        {tasks.map((task, index) => {
          return (
            <li className="list-items" key={index}>
              <span className="txt-task">{task}</span>
              <button
                className="btn btn-delete"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
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
