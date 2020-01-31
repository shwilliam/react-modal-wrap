import React, {useContext} from 'react'
import ModalContext from './context'

export interface IProps {
  value: 'open' | 'close' | 'toggle';
  children: JSX.Element[] | JSX.Element;
}

const ModalTrigger: React.FC<IProps> = ({
  value='open',
  children,
}) => {
  const modal = useContext(ModalContext)

  return (<button
    onClick={modal[value]}
    className="modal-trigger"
  >
    {children}
  </button>)
}

export default ModalTrigger
