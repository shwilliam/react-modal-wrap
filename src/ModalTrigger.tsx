import React, {useContext, Children, cloneElement, ReactElement} from 'react'
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

  return (<>
    {Children.map(
      children,
      (child: ReactElement) => cloneElement(child, {
        onClick: modal[value]
      })
    )}
  </>)
}

export default ModalTrigger
