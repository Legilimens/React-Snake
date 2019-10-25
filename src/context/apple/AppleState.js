import React, { useReducer } from 'react';
import { AppleContext } from './appleContext';
import { appleReducer } from './appleReducer';
import { SET_APPLE } from '../types';
import { getRandomCoordinates } from '../../common';

export const AppleState = ({ children }) => {
    const initialState = {
        apple: [5,8]
    }

    const [state, dispatch] = useReducer(appleReducer, initialState);

    const setApple = (snake, rocks) => { 
        const payload = {
            apple: getRandomCoordinates(snake, rocks)
        }
        dispatch({ type: SET_APPLE, payload });
    }

    return (
        <AppleContext.Provider
            value={{
                apple: state.apple,
                setApple
            }}
        >
            {children}
        </AppleContext.Provider>
    )
}