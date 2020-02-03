import React, {useRef, useEffect, useCallback} from 'react'
import {useFocusTrap, useCloseOnClickAway, useCloseOnEsc, useModal} from './hooks'

export interface IProps {
  closeOnClickAway: boolean;
  closeOnEsc: boolean;
  lockScroll: boolean;
  children: JSX.Element[] | JSX.Element;
}

const Modal: React.FC<IProps> = ({
  closeOnClickAway,
  closeOnEsc,
  lockScroll,
  children,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const {scrollY} = useModal()

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

  const disableScroll = useCallback(() => {
    if (lockScroll) window.scrollTo(0, scrollY) // TODO: handle x pos
  }, [scrollY])

  useEffect(() => {
    window.addEventListener('scroll', disableScroll)
    return () => window.removeEventListener('scroll', disableScroll)
  }, [])


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
