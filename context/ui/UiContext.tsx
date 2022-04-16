import {createContext} from "react";

interface ContextProps {
  isModalOpen: boolean;

  //methods
  closeModal: () => void;
  openModal: () => void;
}

export const UiContext = createContext({} as ContextProps);
