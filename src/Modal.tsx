import React, {useRef, useEffect} from 'react'
import {useFocusTrap, useCloseOnClickAway, useCloseOnEsc} from './hooks'

export interface IProps {
  closeOnClickAway: boolean;
  closeOnEsc: boolean;
  children: JSX.Element[] | JSX.Element;
}

const Modal: React.FC<IProps> = ({
  closeOnClickAway,
  closeOnEsc,
  children,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useCloseOnClickAway(modalRef, !closeOnClickAway)
  useCloseOnEsc(!closeOnEsc)
  const {
    focusFirstInteractive,
    focusLastInteractive,
  } = useFocusTrap(modalRef)

  // focus first interactive el on mount
  useEffect(() => {
    if (modalRef.current) focusFirstInteractive()
  }, [modalRef])

  return (<>
    <span
      tabIndex={0}
      onFocus={focusLastInteractive}
      aria-hidden
    />

    <div {...props} ref={modalRef}>
      {children}
    </div>

    <span
      tabIndex={0}
      onFocus={focusFirstInteractive}
      aria-hidden
    />
  </>)
}

export default Modal
