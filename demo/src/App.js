import React from 'react'
import Modal, {ModalWrapper, useModal} from 'react-modal-wrap'

const ModalCloseButton = ({children}) => {
  const {close} = useModal()

  return <button onClick={close}>{children}</button>
}
const ModalOpenButton = ({children}) => {
  const {open} = useModal()

  return <button onClick={open}>{children}</button>
}

const App = () => (
  <>
    <ModalWrapper>
      <Modal overlay>
        <p>wrapped in el w inline styles to fill document</p>

        <button>another interactive el</button>

        <ModalCloseButton>close</ModalCloseButton>
      </Modal>

      <ModalOpenButton>open modal 1</ModalOpenButton>
    </ModalWrapper>

    <ModalWrapper>
      <Modal closeOnEsc={false} closeOnClickAway={false}>
        <p>close on esc and click away disabled</p>

        <button>banana</button>

        <ModalCloseButton>close</ModalCloseButton>
      </Modal>

      <ModalOpenButton>open modal 2</ModalOpenButton>
    </ModalWrapper>
  </>
)

export default App
