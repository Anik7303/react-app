import React from 'react'
import { createPortal } from 'react-dom'

function Modal({ children }) {
    const element = <div>{children}</div>
    return createPortal(element, document.getElementById('modal'))
}

Modal.defaultProps = {
    children: <h1>Modal</h1>,
}

export default Modal
