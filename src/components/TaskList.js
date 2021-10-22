import TaskListItem from "./TaskListItem";
import Card from "./UI/Card";

import classes from "./TaskList.module.css";
import Button from "./UI/Button";

const TaskList = (props) => {
  const showTasksHandler = (type) => {
    props.onShowtasks(type);
  };

  return (
    <Card className={classes.tasks}>
      <h1 className={classes.heading}>To-Do's</h1>
      <div className={classes.actions}>
        <Button onClick={showTasksHandler.bind(null, "all")}>All </Button>
        <Button onClick={showTasksHandler.bind(null, "done")}>Done </Button>
        <Button onClick={showTasksHandler.bind(null, "todo")}>Todo</Button>
      </div>
      <ul className={classes["task-list"]}>
        {props.datas.map((data) => (
          <TaskListItem
            key={data.id}
            id={data.id}
            task={data.task}
            onRemove={props.onRemove}
            onCheckboxClick={props.onCheckboxClick}
            onEditTask={props.onEditTask}
          />
        ))}
      </ul>
      <div className={classes.actions}>
        <Button onClick={props.onDeleteAllTasks}>Delete All Tasks</Button>
        <Button onClick={props.onDeleteCompletedTasks}>
          Delete Done Tasks
        </Button>
      </div>
    </Card>
  );
};

export default TaskList;
