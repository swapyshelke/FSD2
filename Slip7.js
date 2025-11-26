import React, { useState } from "react";

function Slip7() {
  const [task, setTask] = useState("");      // current input value
  const [tasks, setTasks] = useState([]);    // list of all tasks

  // Called when user types in the form input
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Called when user submits the form to add a new task
  const handleAdd = (e) => {
    e.preventDefault();                     // Prevent page reload

    if (task.trim() === "") return;         // Do nothing if empty

    // Add the new task to the list (create a simple object)
    setTasks([
      ...tasks,
      { id: Date.now(), text: task }
    ]);

    setTask("");                             // Clear the input
  };

  // Called when user wants to delete a task
  const handleDelete = (id) => {
    // Filter out the task with the given id
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>TODO List</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ margin: "10px" }}>
            {t.text}{" "}
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slip7;
