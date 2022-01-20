import React, { useState } from 'react';
import './styles.scss'

function ColorBox() {


    const [color, setColor] = useState('deeppink')

    const handlerandomColor = () => {
        const colors = ['deeppink', 'red', 'green', 'yellow', 'black']
        const randomColor = Math.trunc(Math.random() * 5)
        return colors[randomColor]
    }


    const handleColor = () => {
        setColor(handlerandomColor())
    }
    return (
        <div
            className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleColor}
        >

        </div>
    );
}

export default ColorBox;