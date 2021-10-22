import { useState } from "react";
import classes from "./TaskListItem.module.css";

const TaskListItem = (props) => {
  const [iscompleted, setIsCompleted] = useState(false);

  const deleteHandler = () => {
    props.onRemove(props.id);
  };

  const checkboxHandler = () => {
    setIsCompleted((prev) => !prev);
    props.onCheckboxClick(props.id);
  };

  const editHandler = () => {
    props.onEditTask(props.id);
  };

  return (
    <li className={classes["data-item"]}>
      <div className={classes.name}>{props.task}</div>
      <div className={classes.actions}>
        <div onClick={editHandler}>
          <i className={`${"far fa-edit fa-2x"} ${classes.edit} `}></i>
        </div>
        <div className={classes.checkbox} onClick={checkboxHandler}>
          <i
            className={`${
              !iscompleted ? "far fa-square fa-2x" : "far fa-check-square fa-2x"
            }`}
          ></i>
        </div>
        <div onClick={deleteHandler}>
          <i className={`${"far fa-trash-alt fa-2x"} ${classes.trash} `}></i>
        </div>
      </div>
    </li>
  );
};

export default TaskListItem;
