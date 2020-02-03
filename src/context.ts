import {createContext} from 'react'

interface IModalContextInterface {
  isOpen: boolean;
  open?: any;
  close?: any;
  toggle?: any;
  scrollY: number;
}

export const ModalContext = createContext<IModalContextInterface>({
  isOpen: false,
  scrollY: 0,
})

export default ModalContext
