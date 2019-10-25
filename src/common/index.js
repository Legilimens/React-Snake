import { isEqual } from 'lodash';

export const getRandomCoordinates = (snake, rocks) => {
    const min = 0;
    const max = 19;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let exist = false;
    if (snake !== undefined && rocks !== undefined) {
        snake.map(el => isEqual(el, [x, y]) ? exist = true : null);
        rocks.map(el => isEqual(el, [x, y]) ? exist = true : null);
    }
    return (!exist) ? [x, y] : (getRandomCoordinates());
}