import React from "react";
import Card from "./UI/Card";
import InputForm from "./InputForm";
import classes from "./TaskInput.module.css";

const TaskInput = (props) => {
  return (
    <Card className={classes.taskInput}>
      <h1>To-Do Input</h1>
      <InputForm
        onAddTask={props.onAddTask}
        editMode={props.editMode}
        editTask={props.editTask}
      />
    </Card>
  );
};

export default TaskInput;
