import {useContext, useCallback, useEffect} from 'react'
import ModalContext from '../context'

const useCloseOnEsc = (disabled: boolean = false) => {
  const {close} = useContext(ModalContext)
  const closeOnEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [])

  useEffect(() => {
    if (disabled) return

    document.addEventListener('keydown', closeOnEscape, false)

    return () => {
      document.removeEventListener('keydown', closeOnEscape, false)
    }
  }, [])
}

export default useCloseOnEsc
