import {useContext} from 'react'
import ModalContext from '../context'

const useModal = () => {
  const {isOpen, open, close, toggle} = useContext(ModalContext)

  return {isOpen, open, close, toggle}
}

export default useModal
