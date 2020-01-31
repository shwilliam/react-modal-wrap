import React, {useContext} from 'react'
import Modal from './Modal'
import ModalContext from './ModalContext'

export interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const ModalContainer: React.FC<IProps> = ({children, ...props}) => {
  const {isOpen} = useContext(ModalContext)

  if (isOpen) return (<Modal {...props}>{children}</Modal>)
  return null
}

export default ModalContainer
