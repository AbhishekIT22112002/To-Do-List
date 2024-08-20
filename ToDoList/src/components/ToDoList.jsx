import Header from "./Header";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

function ToDoList() {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);

  function handleInput(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    if (task.includes(value)) {
      alert("This task already existed");
      setValue("");
      return;
    }
    setTask((prev) => [...prev, value]);
    setValue("");
  }

  function handleDelete(value) {
    const updatedTask = task.filter((curr) => curr !== value);
    setTask(updatedTask);
  }

  function handleClearButton() {
    setTask([]);
  }

  function handleTasksUpdate(updatedTasks) {
    setTask(updatedTasks);
  }

  return (
    <>
      <div>
        <h1>TO DO LIST</h1>
        <Header
          handlingFunction={handleInput}
          defaultValue={value}
          handleSubmit={handleSubmit}
        />
        <div className="main">
          <ToDoItem
            Items={task}
            handleDelete={handleDelete}
            handleClearButton={handleClearButton}
            handleUpdateTasks={handleTasksUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default ToDoList;
