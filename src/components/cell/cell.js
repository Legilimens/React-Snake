import React, { useState, useEffect } from 'react';
import { isEqual } from 'lodash';
import './cell.scss';

function Cell(props) {
    const [classList, setClassList] = useState('tableCell');
    
    useEffect(()=> {
        setClassList('tableCell');
        props.snake.map((el) => isEqual(el, [props.cellId, props.columnId]) ? setClassList('tableCell snake') : null );
        props.rocks.map((el) => isEqual(el, [props.cellId, props.columnId]) ? setClassList('tableCell rock') : null );
        if(isEqual([props.cellId, props.columnId], props.apple)) {
            //console.log([props.cellId, props.columnId], props.apple);
            setClassList('tableCell apple');
        }
        // eslint-disable-next-line
    },[props])

    return (
        <span className={classList} />
    )
    //props.snake.map((el) => isEqual(el, [props.cellId, props.columnId]) ? <span className='tableCell snake' /> : null );
    //props.rocks.map((el) => isEqual(el, [props.cellId, props.columnId]) ? <span className='tableCell rock' /> : null );
    
    /*useEffect(()=> {
        props.snake.map((el) => isEqual(el, [props.cellId, props.columnId]) ? setClassList('tableCell snake') : null );
        props.rocks.map((el) => isEqual(el, [props.cellId, props.columnId]) ? setClassList(['tableCell', 'rock']) : null );
        if(isEqual([props.cellId, props.columnId], props.apple)) {
            setClassList('tableCell apple');
        } else setClassList('tableCell');
    },[props])*/

    //return <span className={classList} />
}

export default Cell;