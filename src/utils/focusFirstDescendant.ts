import attemptFocus from './attemptFocus'

const focusFirstDescendant = (element: any): boolean => {
  for (let i = 0; i < element.childNodes.length; i++) {
    let child = element.childNodes[i]
    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true
    }
  }
  return false
}

export default focusFirstDescendant

