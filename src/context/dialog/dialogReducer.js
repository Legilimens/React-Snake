import { SHOW_DIALOG, HIDE_DIALOG } from '../types';

const handlers = {
    [SHOW_DIALOG]: state => ({ ...state, open: true }),
    [HIDE_DIALOG]: state => ({ ...state, open: false }),
    DEFAULT: state => state
}

export const dialogReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}