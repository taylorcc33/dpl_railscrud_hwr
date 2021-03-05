import React, { useState } from "react";
import axios from "axios";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      let res = await axios.get("/tasks");
      console.log(res);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createTask = async (newTask) => {
    try {
      let res = await axios.post("/tasks", { ...newTask });
      console.log(res);
      setTasks([res.data, ...tasks]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      let res = await axios.delete(`/tasks/${id}`);

      let filteredTasks = tasks.filter((task) => task.id !== id);

      setTasks(filteredTasks);
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (id, task) => {
    try {
      let res = await axios.put(`/tasks/${id}`, task);
      console.log(res.data);
      let newTasks = tasks.map((t) => (t.id !== id ? t : res.data));
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <button onClick={() => getTasks()}>Show me my To Do tasks</button>
      <br />
      <br />
      <TaskForm createTask={createTask} />
      <br />
      <br />
      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
