import * as React from "react";
import Header from "../components/header/header";
import { toggleMenu } from "../reducers/headerReducer";
import { IStore } from "../reducers";
import { connect } from "react-redux";

export interface IReactProps {}

export interface IReduxProps {
  toggleMenu: () => {};
  menuOpen: boolean;
}

export interface IState {}

class HeaderContainer extends React.Component<
  IReactProps & IReduxProps,
  IState
> {
  public render() {
    return (
      <>
        <div>
          <Header onMenuClick={this.props.toggleMenu} />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: IStore) => {
  return {
    menuOpen: state.header.menuOpen
  };
};

const mapDispatchToProps = { toggleMenu };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
