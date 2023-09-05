import React from 'react'
import {useState} from 'react';
import './components.css'

const Button = ({onClick, title, value}) => {

    const handleButtonClick = (value) => { // Do something with the clicked value, e.g., update the calculator's display
        console.log(`Button clicked with value: ${value}`);
    };

    return (
        <>
            <div className='frame'>
                <div className='calculator'>
                    <div className='first-row'>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>/</button>
                    </div>
                    <div className='second-row'>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>*</button>
                    </div>
                    <div className='third-row'>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>-</button>
                    </div>
                    <div className='fourth-row'>
                        <button>.</button>
                        <button>0</button>
                        <button className='result'
                            onClick={
                                {}
                        }>=</button>
                        <button>+</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Button
