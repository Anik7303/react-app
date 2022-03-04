import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 90%;
    max-width: 60rem;
    height: 80%;
    max-height: 50rem;
    padding: 2rem;
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
    background-color: #e5e5e5;

    &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: -1;
    }
`

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service.
        console.log('========================================================')
        console.log({ error, errorInfo })
        console.log('========================================================')
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorContainer>
                    <h2 className="error__title">500 - Server Error</h2>
                    <p className="error__body">
                        An unexpected error has occured.
                    </p>
                </ErrorContainer>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
