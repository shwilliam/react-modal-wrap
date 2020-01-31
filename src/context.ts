import {createContext} from 'react'

interface IModalContextInterface {
  isOpen: boolean;
  open?: any;
  close?: any;
  toggle?: any;
}

export const ModalContext = createContext<IModalContextInterface>({
  isOpen: false,
})

export default ModalContext
