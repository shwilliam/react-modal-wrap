const attemptFocus = (element: any): boolean => {
  try {
    element.focus()
  }
  catch (e) {
    // not focusable
  }

  return (document.activeElement === element)
}

export default attemptFocus
