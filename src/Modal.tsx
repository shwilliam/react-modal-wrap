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
  const closeOnEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [])
  const closeOnOutsideClick = useCallback((event: any): void => {
    if (modalRef.current && !modalRef.current.contains(event.target))
      close()
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

  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick, false)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick, false)
    }
  }, [])

  return (<div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }}>
    <span tabIndex={0} onFocus={focusLastInteractive} />

    <div {...props} ref={modalRef}>
      {children}
    </div>

    <span tabIndex={0} onFocus={focusFirstInteractive} />
  </div>)
}

export default Modal
