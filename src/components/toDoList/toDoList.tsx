import * as React from "react";
import styles from "../toDoList/toDoList.module.scss";

export interface IProps {}

export interface IState {}

class ToDoList extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div className={styles.toDoList}>
        <header>To Do</header>
      </div>
    );
  }
}

export default ToDoList;
