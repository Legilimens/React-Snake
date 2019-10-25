import { SET_APPLE } from '../types';

const handlers = {
    [SET_APPLE]: (state, { payload }) => ({
        ...state,
        apple: payload.apple
    }),

    DEFAULT: state => state
}

export const appleReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}