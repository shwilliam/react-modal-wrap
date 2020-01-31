import {useCallback} from 'react'
import {focusFirstDescendant, focusLastDescendant} from '../utils'

const useFocusTrap = (ref: any) => {
  const focusFirstInteractive = useCallback((): boolean =>
    focusFirstDescendant(ref.current), [ref])
  const focusLastInteractive = useCallback((): boolean =>
    focusLastDescendant(ref.current), [ref])

  return {focusFirstInteractive, focusLastInteractive}
}

export default useFocusTrap
