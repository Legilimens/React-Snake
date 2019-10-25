import {
    EAT_APPLE, RESET_SNAKE, SNAKE_UP, SNAKE_DOWN, SNAKE_LEFT, SNAKE_RIGHT,
    DIRECTION_UP, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, RESET_DIRECTION
} from '../types';

const handlers = {

    [RESET_SNAKE]: (state, { payload }) => ({
        ...state,
        snake: payload
    }),

    [EAT_APPLE]: (state, { payload }) => ({
        ...state,
        snake: [...payload.snake, payload.snakeCopy.pop()]
    }),

    [SNAKE_UP]: (state, { payload }) => ({
        ...state,
        snake: [[--payload.snakeCopy[0][0], payload.snakeCopy[0][1]], ...payload.snake.slice(0, -1)]
    }),

    [SNAKE_DOWN]: (state, { payload }) => ({
        ...state,
        snake: [[++payload.snakeCopy[0][0], payload.snakeCopy[0][1]], ...payload.snake.slice(0, -1)]
    }),

    [SNAKE_LEFT]: (state, { payload }) => ({
        ...state,
        snake: [[payload.snakeCopy[0][0], --payload.snakeCopy[0][1]], ...payload.snake.slice(0, -1)]
    }),

    [SNAKE_RIGHT]: (state, { payload }) => ({
        ...state,
        snake: [[payload.snakeCopy[0][0], ++payload.snakeCopy[0][1]], ...payload.snake.slice(0, -1)]
    }),

    [DIRECTION_UP]: (state) => ({
        ...state,
        direction: 'Up'
    }),

    [DIRECTION_DOWN]: (state) => ({
        ...state,
        direction: 'Down'
    }),

    [DIRECTION_LEFT]: (state) => ({
        ...state,
        direction: 'Left'
    }),

    [DIRECTION_RIGHT]: (state) => ({
        ...state,
        direction: 'Right'
    }),

    [RESET_DIRECTION]: (state) => ({
        ...state,
        direction: ''
    }),

    DEFAULT: state => state
}

export const snakeReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}