import {UiState} from "./";

type UiActionType = {type: "[Ui] - Open Modal"} | {type: "[Ui] - Close Modal"};

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[Ui] - Open Modal":
      return {
        ...state,
        isModalOpen: true,
      };
    case "[Ui] - Close Modal":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
