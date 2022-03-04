import { useState, useCallback } from 'react'
import styled from 'styled-components'

import Modal from '../Modal'
import BuggyCounter from './BuggyCounter'
import ErrorBoundary from './ErrorBoundary'

const Container = styled.div`
    text-align: center;
`

const ShowModalButton = styled.button`
    background-color: green;
    color: white;
    padding: 1rem;
    font-size: 1.6rem;
    border: 2px solid green;
    cursor: pointer;
    transition: background 200ms, color 200ms;
    box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: white;
        color: green;
    }
`

function App() {
    const [error, setError] = useState({})
    const onClose = useCallback(() => setError(null), [])
    const showModal = useCallback(() => setError('There was an error'), [])

    return (
        <Container>
            <h1>Welcome to React 17</h1>
            <p>Testing React Features:</p>
            <ul>
                <li>Portal</li>
                <li>Error Boundary</li>
            </ul>
            <ShowModalButton onClick={showModal}>Show Modal</ShowModalButton>
            <Modal show={error !== null} onClose={onClose} />
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>
        </Container>
    )
}

export default App
