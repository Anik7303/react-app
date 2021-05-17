import { createPortal } from 'react-dom'
import styled from 'styled-components'

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 90vw;
    max-width: 40rem;
    height: 50vh;
    max-height: 40rem;
    padding: 2rem;
    background-color: white;
    box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.2);
    z-index: 2;
`

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`

function Modal({ children, show, onClose }) {
    if (!show) return null
    const element = (
        <>
            <Backdrop onClick={onClose} />
            <ModalContainer>{children}</ModalContainer>
        </>
    )
    return createPortal(element, document.getElementById('modal'))
}

Modal.defaultProps = {
    children: <h1>Modal</h1>,
}

export default Modal
