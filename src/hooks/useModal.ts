import {useContext} from 'react'
import ModalContext from '../context'

const useModal = () => {
  const {
    isOpen,
    open,
    close,
    toggle,
    scrollY,
  } = useContext(ModalContext)

  return {isOpen, open, close, toggle, scrollY}
}

export default useModal
