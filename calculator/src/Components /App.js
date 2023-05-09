import React, { useState } from 'react'
import Keypad from './Keypad'

const Calculator = () => {
    const [result, setResult] = useState('')

    const handleClick = (value) => {
        setResult(result + value)
    }

    const handleClear = () => {
        setResult('')
    }

    const handleEqual = () => {
        setResult(eval(result))
    }

    const handlePercentage = () => {
        setResult(eval(result)/100)
    }

    const handleDecimal = () => {
        if (result.indexOf('.') === -1) {
            setResult(result + '.')
        }
    }

    const handleDelete = () => {
        setResult(result.slice(0, -1))
    }

    return (
        <div className="calculator">
            <div className="display">{result}</div>
            <Keypad 
                handleClick={handleClick}
                handleClear={handleClear}
                handleEqual={handleEqual}
                handlePercentage={handlePercentage}
                handleDecimal={handleDecimal}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Calculator
