import React, {useContext} from 'react'
import Modal from './Modal'
import ModalContext from './ModalContext'

export interface IProps {
  overlay: boolean;
  children: JSX.Element[] | JSX.Element;
}

const ModalContainer: React.FC<IProps> = ({
  overlay = false,
  children,
  ...props
}) => {
  const {isOpen} = useContext(ModalContext)

  if (isOpen) return overlay ? (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      {...props}
    >
      <Modal>{children}</Modal>
    </div>
  ) : (<Modal {...props}>{children}</Modal>)

  return null
}

export default ModalContainer
