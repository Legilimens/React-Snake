import React, { useReducer } from 'react';
import { RocksContext } from './rocksContext';

export const RocksState = ({ children }) => {
    const initialState = {
        rocks: [
            [6, 7],
            [2, 15],
        ]
    }
    
    const [state] = useReducer(null, initialState);

    return (
        <RocksContext.Provider
            value={{
                rocks: state.rocks
            }}
        >
            {children}
        </RocksContext.Provider>
    )
}