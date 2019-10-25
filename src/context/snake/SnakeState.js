import React, { useReducer } from 'react';
import { cloneDeep } from 'lodash';
import { SnakeContext } from './snakeContext';
import { snakeReducer } from './snakeReducer';
import {
    EAT_APPLE, RESET_SNAKE, SNAKE_UP, SNAKE_DOWN, SNAKE_LEFT, SNAKE_RIGHT,
    DIRECTION_UP, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, RESET_DIRECTION
} from '../types';

export const SnakeState = ({ children }) => {
    const initialState = {
        snake: [
            [10, 11],
            [10, 12],
            [11, 12],
            [12, 12],
        ],
        direction: ''
    }
    const [state, dispatch] = useReducer(snakeReducer, initialState);

    const snakeUp = () => {
        const payload = {
            snake: state.snake,
            snakeCopy: cloneDeep(state.snake)
        }
        dispatch({ type: SNAKE_UP, payload });
    }

    const snakeDown = () => {
        const payload = {
            snake: state.snake,
            snakeCopy: cloneDeep(state.snake)
        }
        dispatch({ type: SNAKE_DOWN, payload });
    }

    const snakeLeft = () => {
        const payload = {
            snake: state.snake,
            snakeCopy: cloneDeep(state.snake)
        }
        dispatch({ type: SNAKE_LEFT, payload });
    }

    const snakeRight = () => {
        const payload = {
            snake: state.snake,
            snakeCopy: cloneDeep(state.snake)
        }
        dispatch({ type: SNAKE_RIGHT, payload });
    }

    const resetSnake = () => {
        dispatch({ type: RESET_SNAKE, payload: initialState.snake });
    }

    const eatApple = () => {
        const payload = {
            snake: state.snake,
            snakeCopy: cloneDeep(state.snake)
        }
        dispatch({ type: EAT_APPLE, payload });
    }

    const directionUp = () => {
        dispatch({ type: DIRECTION_UP });
    }

    const directionDown = () => {
        dispatch({ type: DIRECTION_DOWN });
    }

    const directionLeft = () => {
        dispatch({ type: DIRECTION_LEFT });
    }

    const directionRight = () => {
        dispatch({ type: DIRECTION_RIGHT });
    }

    const resetDirection = () => {
        dispatch({ type: RESET_DIRECTION });
    }

    return (
        <SnakeContext.Provider
            value={{
                snake: state.snake,
                direction: state.direction,
                resetSnake,
                eatApple,
                snakeUp,
                snakeDown,
                snakeLeft,
                snakeRight,
                directionUp,
                directionDown,
                directionLeft,
                directionRight,
                resetDirection
            }}
        >
            {children}
        </SnakeContext.Provider>
    )
}