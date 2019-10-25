import React, { useState, useEffect, useContext } from 'react';
import { SnakeContext } from '../../context/snake/snakeContext';
import { AppleContext } from '../../context/apple/appleContext';
import { RocksContext } from '../../context/rocks/rocksContext';
import { isEqual } from 'lodash';
import './cell.scss';

function Cell(props) {
    const { snake } = useContext(SnakeContext);
    const { apple } = useContext(AppleContext);
    const { rocks } = useContext(RocksContext);
    const [classList, setClassList] = useState('tableCell');
    
    useEffect(()=> {
        setClassList('tableCell');
        snake.map((el) => isEqual(el, [props.cellId, props.columnId]) ? setClassList('tableCell snake') : null );
        rocks.map((el) => isEqual(el, [props.cellId, props.columnId]) ? setClassList('tableCell rock') : null );
        if(isEqual([props.cellId, props.columnId], apple)) {
            setClassList('tableCell apple');
        }
        // eslint-disable-next-line
    },[props])

    return (
        <span className={classList} />
    )
}

export default Cell;