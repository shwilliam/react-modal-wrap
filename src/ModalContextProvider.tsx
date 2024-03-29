import React, {useState} from 'react'
import ModalContext from './context'

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const ModalContextProvider: React.FC<IProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState()
  const [lastFocusedOutside, setLastFocusedOutside] = useState()

  const open = (e: any): void => {
    setIsOpen(true)
    setLastFocusedOutside(e.target)
    setScrollY(window.scrollY)
  }
  const close = (): void => {
    setIsOpen(false)
    lastFocusedOutside.focus()
    setLastFocusedOutside(null)
  }
  const toggle = (e: any): boolean => {
    setIsOpen((s: boolean):boolean => {
      if (s) {
        setLastFocusedOutside(e.target)
        return s
      }
      setLastFocusedOutside(null)
      return !s
    })

    return isOpen
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
        scrollY,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
