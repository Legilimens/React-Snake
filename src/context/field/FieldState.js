import React, { useReducer } from 'react';
import { FieldContext } from './fieldContext';

export const FieldState = ({ children }) => {
    const initialState = {
        field: Array(20).fill(Array(20).fill(0))
    }
    
    const [state] = useReducer(null, initialState);

    return (
        <FieldContext.Provider
            value={{
                field: state.field
            }}
        >
            {children}
        </FieldContext.Provider>
    )
}