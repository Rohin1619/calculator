import React, {useState} from 'react';
import './page.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const operators = [
        '/',
        '*',
        '+',
        '-',
        '.'
    ];
    const numbers = [
        7,
        8,
        9,
        4,
        5,
        6,
        1,
        2,
        3,
        0,
    ];

    // console.log(operators.includes(input[input.length - 1]));
    const handleButtonClick = (value) => {
        if (operators.includes(input[input.length - 1]) && operators.includes(value)) {
            return;
        }
        setInput((prevInput) => prevInput + value);

    }

    const clearInput = () => {
        setInput('');
    };


    const calculateResult = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }

    };


    return (
        <>
            <h2>CALCULATOR</h2>
            <div className="calculator">
                <div className='string'>
                    <label className='result'>
                        {input}</label>
                </div>
                <br></br>
                <div className="operators">
                    {
                    operators.map((operator, index) => (
                        <button className='sign'
                            key={index}
                            onClick={
                                () => handleButtonClick(operator)
                        }>
                            {operator} </button>
                    ))
                } </div>
                <div className='buttoncontainer'>
                    <div className="numbers">
                        {
                        numbers.map((number, index) => (
                            <button className='intg'
                                key={index}
                                onClick={
                                    () => handleButtonClick(number)
                            }>
                                {number} </button>
                        ))
                    } </div>
                    <div>
                        <button className='clear'
                            onClick={clearInput}>C</button>
                        <button className='calc'
                            onClick={calculateResult}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calculator;
