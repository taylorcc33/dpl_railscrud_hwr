import React, { useState } from "react";

const Task = (props) => {
  const { name, due_date, id, deleteTask, editTask } = props;
  const [nameNew, setNameNew] = useState(name);
  const [due_dateNew, setDue_dateNew] = useState(due_date);

  const [editing, setEditing] = useState(false);

  const handleSubmit = () => {
    editTask(id, { name: nameNew, due_date: due_dateNew });

    setEditing(false);
  };

  const editForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={nameNew}
          placeholder="Task Name"
          onChange={(e) => setNameNew(e.target.value)}
        />

        <input
          value={due_dateNew}
          placeholder="Due Date"
          onChange={(e) => setDue_dateNew(e.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
    );
  };

  const renderEditForm = () => {
    if (editing) {
      return editForm();
    }
  };

  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>
          <strong>Due Date:</strong> {due_date}
        </p>
        <button onClick={() => deleteTask(id)}>✅ Complete Task</button>
        <button onClick={() => setEditing(true)}>Edit Form</button>
        <p>{renderEditForm()}</p>
        <hr />
      </div>
    </>
  );
};

export default Task;
