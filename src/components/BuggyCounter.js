import React, { useState, useEffect } from 'react'

function BuggyCounter() {
    const [counter, setCounter] = useState(0)

    const handleClick = () => setCounter((counter) => counter + 1)

    useEffect(() => {
        if (counter >= 5) throw new Error('Counter Crashed!')
    }, [counter])

    return <h1 onClick={handleClick}>{counter}</h1>
}

export default BuggyCounter
