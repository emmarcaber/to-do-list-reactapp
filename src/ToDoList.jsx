import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Write journal",
    "Running",
    "Coding and solving problems",
  ]);
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
    // Filter function to remove the
    // element with same index.
    const filterTaskFunction = tasks.filter((_, i) => i !== index);
    setTasks(filterTaskFunction);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      setTasks((t) => {
        const prevTasks = [...t];
        [prevTasks[index], prevTasks[index - 1]] = [
          prevTasks[index - 1],
          prevTasks[index],
        ];
        return prevTasks;
      });
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      setTasks((t) => {
        const prevTasks = [...t];
        [prevTasks[index], prevTasks[index + 1]] = [
          prevTasks[index + 1],
          prevTasks[index],
        ];
        return prevTasks;
      });
    }
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
              <button className="btn btn-up" onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button
                className="btn btn-down"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ToDoList;
