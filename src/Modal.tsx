import React, {useContext} from 'react'
import ModalContext from './ModalContext'

export interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const Modal: React.FC<IProps> = ({children, ...props}) => {
  const {isOpen} = useContext(ModalContext)

  if (isOpen) return (<div {...props}>{children}</div>)
  return null
}

export default Modal
