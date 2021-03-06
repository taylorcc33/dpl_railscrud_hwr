import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  const { tasks, deleteTask, editTask } = props;

  const renderTasks = () => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          {...task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      );
    });
  };

  return (
    <>
      <div>{renderTasks()}</div>
    </>
  );
};

export default Tasks;
