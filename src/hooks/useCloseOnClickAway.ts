import {useContext, useCallback, useEffect} from 'react'
import ModalContext from '../context'

const useCloseOnClickAway = (
  ref: any,
  disabled: boolean = false,
) => {
  const {close} = useContext(ModalContext)

  const closeOnOutsideClick = useCallback((event: any): void => {
    if (ref.current && !ref.current.contains(event.target))
      close()
  }, [])

  useEffect(() => {
    if (disabled) return

    document.addEventListener('mousedown', closeOnOutsideClick, false)

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick, false)
    }
  }, [])
}

export default useCloseOnClickAway
