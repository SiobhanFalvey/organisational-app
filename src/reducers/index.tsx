import { combineReducers } from "redux";
import headerReducer, { IHeaderState } from "./headerReducer";

export interface IStore {
  header: IHeaderState;
}

export default combineReducers({
  header: headerReducer
});
