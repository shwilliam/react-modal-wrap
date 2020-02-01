# react-modal-wrap

This component is based on the WAI-ARIA Authoring Practices's [modal dialog pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal), which describes that a modal should:

- Disable interaction outside itself
- Trap tab navigation
- Close modal on attempt to interact outside modal
- Disable scroll on body

## Installation

```shell
$ npm i react-modal-wrap
```

## Usage

```js
import React from 'react'
import {Modal, ModalWrapper, ModalTrigger} from 'react-modal-wrap'

const App = () => (
  <ModalWrapper>
    <ModalTrigger value="open">open</ModalTrigger>

    <Modal>
      <p>Hello from modal</p>

      <ModalTrigger value="close">close</ModalTrigger>
    </Modal>
  </ModalWrapper>
)

export default App
```

## Components

### `<Modal />`

A context wrapper that handles checkbox state changes. Must wrap `<TriStateCheckbox />` and `<Checkbox />`.

#### Props

| Name               | Type    | Required | Default | Description                                                               |
| ------------------ | ------- | :------: | ------- | ------------------------------------------------------------------------- |
| `overlay`          | boolean |    ❌    | `false` | Whether to render a wrapper around the modal styled to fill the document. |
| `closeOnClickAway` | boolean |    ❌    | `true`  | Whether the modal should close when click detected outside of container.  |
| `closeOnEsc`       | boolean |    ❌    | `true`  | Whether the modal should close on escape keypress.                        |

## Hooks

### `useModal`

Returns an object with the following functions to control the modal:

| Name     | Type     | Return type | Description                                                                    |
| -------- | -------- | :---------: | ------------------------------------------------------------------------------ |
| `open`   | function |    void     | Opens the modal.                                                               |
| `close`  | function |    void     | Closes the modal.                                                              |
| `toggle` | function |   boolean   | Toggles the modal and returns a boolean representing if the the modal is open. |

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/react-modal-wrap/issues). If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/react-modal-wrap)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/react-modal-wrap/pull/new/master)
