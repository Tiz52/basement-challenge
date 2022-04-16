import {FC, useReducer, useCallback} from "react";

import {UiContext, uiReducer} from "./";

export interface UiState {
  isModalOpen: boolean;
}

const Ui_INITIAL_STATE: UiState = {
  isModalOpen: false,
};

export const UiProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const openModal = useCallback(() => {
    dispatch({type: "[Ui] - Open Modal"});
  }, []);

  const closeModal = useCallback(() => {
    dispatch({type: "[Ui] - Close Modal"});
  }, []);

  return (
    <UiContext.Provider
      value={{
        ...state,

        //methods
        openModal,
        closeModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
