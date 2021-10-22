import "./App.css";
import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksToShow, setTasksToShow] = useState("all");
  const [editMode, setEditMode] = useState(false);
  const [editTask, setEditTask] = useState({});

  const addTaskHandler = (enteredTask) => {
    if (editMode) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];

        const editTaskIndex = updatedTasks.findIndex(
          (task) => task.id === editTask.id,
        );

        const updatedTask = {
          task: enteredTask,
          id: editTask.id,
          completed: false,
        };

        updatedTasks[editTaskIndex] = updatedTask;

        return updatedTasks;
      });
      setEditMode(false);
      return;
    }

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      updatedTasks.unshift({
        task: enteredTask,
        id: Math.random().toString(),
        completed: false,
      });
      return updatedTasks;
    });
  };

  const removeTaskHandler = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((data) => data.id !== id);

      return updatedTasks;
    });
  };

  const checkboxHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTaskHandler = (id) => {
    setEditMode(true);
    const taskToBeEdited = tasks.find((task) => task.id === id);
    console.log(taskToBeEdited);
    setEditTask(taskToBeEdited);
  };

  const tasksToShowHandler = (type) => {
    setTasksToShow(type);
  };

  let showTasks = [];

  if (tasksToShow === "all") showTasks = tasks;
  else if (tasksToShow === "done")
    showTasks = tasks.filter((task) => task.completed === true);
  else if (tasksToShow === "todo")
    showTasks = tasks.filter((task) => task.completed === false);

  const noOfTasks = tasks.length > 0;

  const deleteAllTasksHandler = () => {
    setTasks([]);
  };

  const deleteCompletedTasksHandler = () => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.completed === false);

      return updatedTasks;
    });
  };

  return (
    <React.Fragment>
      <TaskInput
        onAddTask={addTaskHandler}
        editMode={editMode}
        editTask={editTask}
      />
      {noOfTasks && (
        <TaskList
          datas={showTasks}
          onCheckboxClick={checkboxHandler}
          onRemove={removeTaskHandler}
          onShowtasks={tasksToShowHandler}
          onDeleteAllTasks={deleteAllTasksHandler}
          onDeleteCompletedTasks={deleteCompletedTasksHandler}
          onEditTask={editTaskHandler}
        />
      )}
    </React.Fragment>
  );
}

export default App;
