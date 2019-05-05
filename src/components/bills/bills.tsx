import * as React from "react";
import styles from "../bills/bills.module.scss";

export interface IProps {}

export interface IState {}

class Bills extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div className={styles.bills}>
        <header>Bills</header>
      </div>
    );
  }
}

export default Bills;
