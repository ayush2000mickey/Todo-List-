import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  const Backdrop = () => {
    return <div onClick={props.onConfirm} className={classes.backdrop} />;
  };

  const Overlay = (props) => {
    return (
      <Card className={classes.overlay}>
        <header className={classes.header}>
          <i className="fas fa-times-circle fa-2x"></i>
          <h2>{props.message}</h2>
        </header>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root"),
      )}
      {ReactDOM.createPortal(
        <Overlay message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root"),
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
