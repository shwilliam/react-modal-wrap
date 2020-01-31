import attemptFocus from './attemptFocus'

const focusLastDescendant = (element: any): boolean => {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    let child = element.childNodes[i]
    if (attemptFocus(child) || focusLastDescendant(child)) {
      return true
    }
  }
  return false
}

export default focusLastDescendant
