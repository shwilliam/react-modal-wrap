import React, {useRef, useEffect, useContext, useCallback} from 'react'
import {focusFirstDescendant, focusLastDescendant} from './utils'
import ModalContext from './ModalContext'

export interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const Modal: React.FC<IProps> = ({children, ...props}) => {
  const {close} = useContext(ModalContext)
  const modalRef = useRef<HTMLDivElement>(null)

  const focusFirstInteractive = useCallback((): boolean =>
    focusFirstDescendant(modalRef.current), [modalRef])
  const focusLastInteractive = useCallback((): boolean =>
    focusLastDescendant(modalRef.current), [modalRef])
  const closeOnEscape = useCallback((event) => {
    if (event.keyCode === 27) close()
  }, [])

  // focus first interactive el on mount
  useEffect(() => {
    if (modalRef.current) focusFirstInteractive()
  }, [modalRef])

  useEffect(() => {
    document.addEventListener('keydown', closeOnEscape, false)
    return () => {
      document.removeEventListener('keydown', closeOnEscape, false)
    }
  }, [])

  return (<>
    <span tabIndex={0} onFocus={focusLastInteractive} />

    <div {...props} ref={modalRef}>
      {children}
    </div>

    <span tabIndex={0} onFocus={focusFirstInteractive} />
  </>)
}

export default Modal
