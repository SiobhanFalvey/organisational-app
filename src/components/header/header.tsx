import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { IStore } from "../../reducers";
import { connect } from "react-redux";

export interface IReactProps {
  onMenuClick: () => void;
}

export interface IReduxProps {
  menuOpen: boolean;
}

export interface IState {}

class Header extends React.Component<IReactProps & IReduxProps, IState> {
  // public state = {};
  public render() {
    const showMenu = this.props.menuOpen
      ? { display: "block" }
      : { display: "none" };
    return (
      <nav className={styles.dropDownMenu}>
        <span onClick={this.props.onMenuClick}>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
        <ul className={styles.menuContainer} style={showMenu}>
          <li>Main Page</li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    menuOpen: state.header.menuOpen
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
