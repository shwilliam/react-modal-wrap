import React, {useState, useCallback, useEffect} from 'react'
import ModalContext from './context'

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

const ModalContextProvider: React.FC<IProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState()
  const [lastFocusedOutside, setLastFocusedOutside] = useState()

  const disableScroll = useCallback(() => {
    window.scrollTo(0, scrollTop) // TODO: handle x pos
  }, [scrollTop])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', disableScroll)
    } else {
      window.removeEventListener('scroll', disableScroll)
    }

  }, [isOpen])

  const open = (e: any): void => {
    setIsOpen(true)
    setLastFocusedOutside(e.target)
    setScrollTop(window.scrollY)
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
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
