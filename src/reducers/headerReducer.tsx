export const SET_TOGGLE_MENU = "SET_TOGGLE_MENU";

export const toggleMenu = (): IToggleMenuActions => ({
  type: SET_TOGGLE_MENU
});

export interface IToggleMenuActions {
  type: typeof SET_TOGGLE_MENU;
}

type IHeaderActions = IToggleMenuActions;

export interface IHeaderState {
  menuOpen: boolean;
}

const initialState: IHeaderState = {
  menuOpen: false
};

const headerReducer = (state = initialState, action: IHeaderActions) => {
  switch (action.type) {
    case SET_TOGGLE_MENU:
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
};
export default headerReducer;
