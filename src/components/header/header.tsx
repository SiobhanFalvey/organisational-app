import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <nav className={styles.dropDownMenu}>
        <span>
          <FontAwesomeIcon icon="angle-down" />
        </span>
        <ul className={styles.menuContainer}>
          <li>Main Page</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
