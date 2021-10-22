import React, { useEffect, useState } from "react";
import classes from "./InputForm.module.css";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const InputForm = (props) => {
  const [error, setError] = useState(null);

  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    if (props.editMode) {
      setTaskInput(props.editTask.task);
    }
  }, [props.editMode, props.editTask]);

  const onInputChangeHandler = (event) => {
    setTaskInput(event.target.value);
  };

  const submitTaskHandler = (event) => {
    event.preventDefault();
    const enteredTask = taskInput;

    if (enteredTask.trim().length === 0) {
      setError("Task should not be empty");
      return;
    }

    props.onAddTask(enteredTask);
    setTaskInput("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <ErrorModal message={error} onConfirm={errorHandler} />}
      <form className={classes["user-form"]} onSubmit={submitTaskHandler}>
        <div className={classes["form-control"]}>
          <input
            type="text"
            placeholder="Enter Task Here..."
            value={taskInput}
            onChange={onInputChangeHandler}
          />
        </div>
        <Button type="submit">{props.editMode ? "Edit" : "+ Add Task"}</Button>
      </form>
    </React.Fragment>
  );
};

export default InputForm;
