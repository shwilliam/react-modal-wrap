import React, {useState, createContext} from 'react'

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

interface IModalContextInterface {
  isOpen: boolean;
  open?: any;
  close?: any;
  toggle?: any;
}

export const ModalContext = createContext<IModalContextInterface>({
  isOpen: false,
})

const ModalContextProvider: React.FC<IProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((s: boolean):boolean => !s)

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export {ModalContextProvider}
export default ModalContext
