import React, {useContext} from 'react'
import ModalContext from './context'
import Modal from './Modal'

export interface IProps {
  overlay: boolean;
  closeOnClickAway: boolean;
  closeOnEsc: boolean;
  children: JSX.Element[] | JSX.Element;
}

const ModalContainer: React.FC<IProps> = ({
  overlay = false,
  closeOnClickAway = true,
  closeOnEsc = true,
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
      <Modal
        closeOnClickAway={closeOnClickAway}
        closeOnEsc={closeOnEsc}
      >{children}</Modal>
    </div>
  ) : (
    <Modal
      closeOnClickAway={closeOnClickAway}
      closeOnEsc={closeOnEsc}
    >
      {children}
    </Modal>
  )

  return null
}

export default ModalContainer
