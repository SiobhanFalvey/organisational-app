import * as React from "react";
import styles from "./shoppingList.module.scss";

export interface IProps {}

export interface IState {}

class ShoppingList extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div className={styles.shoppingList}>
        <header>Shopping List</header>
      </div>
    );
  }
}

export default ShoppingList;
