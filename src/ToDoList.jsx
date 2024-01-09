import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    return (
        <div className="container">
            <p>
                <input type="text" id="taskInput" placeholder="Add task" />
                <button>Add</button>
            </p>

            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default ToDoList;