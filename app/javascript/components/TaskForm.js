import React, { useState } from "react";

const TaskForm = (props) => {
  const { createTask } = props;
  const [name, setName] = useState("");
  const [due_date, setDue_date] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ name, due_date });
  };

  return (
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="Task Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={due_date}
          placeholder="Due Date"
          onChange={(e) => setDue_date(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
