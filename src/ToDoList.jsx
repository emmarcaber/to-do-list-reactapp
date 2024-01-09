import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Write journal"]);
    const [newTask, setNewTask] = useState("");

    return (
        <div className="container">
            <p>
                <input type="text" id="taskInput" placeholder="Add task" />
                <button>Add</button>
            </p>

            <ul>
                {
                    tasks.map((task, index) => {
                        return (
                            <li>
                                <span className="txt-task">{task}</span>
                                <button className="btn btn-delete">Delete</button>
                                <button className="btn btn-up">Up</button>
                                <button className="btn btn-down">Down</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;