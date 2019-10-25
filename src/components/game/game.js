import React, { useEffect, useContext } from 'react';
import useInterval from '../../customHook/useInterval'
import Table from '../table/table';
import Dialog from '../dialog/dialog';
import { cloneDeep, isEqual } from 'lodash';
import { SnakeContext } from '../../context/snake/snakeContext';
import { DialogContext } from '../../context/dialog/dialogContext';
import { AppleContext } from '../../context/apple/appleContext';
import { RocksContext } from '../../context/rocks/rocksContext';
import './game.scss';

function Game() {
  const { 
    snake, snakeUp, snakeDown, snakeLeft, snakeRight, resetSnake, eatApple, resetDirection,
    direction, directionUp, directionDown, directionLeft, directionRight
  } = useContext(SnakeContext);
  const { dialog, dialogOpen } = useContext(DialogContext);
  const { apple, setApple } = useContext(AppleContext);
  const { rocks } = useContext(RocksContext);

  useEffect(() => {
    const controlButtons = (e) => {
      switch (e.key) {
        case ('ArrowUp'):
          if (direction !== 'Up' && direction !== 'Down' && !dialog) {
            directionUp();
          }
          break;
        case ('ArrowDown'):
          if (direction !== 'Down' && direction !== 'Up' && !dialog) {
            directionDown();
          }
          break;
        case ('ArrowLeft'):
          if (direction !== 'Left' && direction !== 'Right' && !dialog) {
            directionLeft();
          }
          break;
        case ('ArrowRight'):
          if (direction !== 'Right' && direction !== 'Left' && !dialog) {
            directionRight();
          }
          break;
        default:
          return;
      }
    };
    window.addEventListener('keyup', controlButtons);
    checkGameOver();
    checkEatApple();

    return () => {
      window.removeEventListener('keyup', controlButtons);
    };
    // eslint-disable-next-line
  }, [snake, dialog]);

  const gameOver = () => {
    dialogOpen();
    setApple(snake, rocks);
    resetDirection();
    resetSnake();
  };

  const checkEatApple = () => {
    if (isEqual(snake[0], apple)) {
      setApple(snake, rocks);
      eatApple();
    }
  }

  const checkGameOver = () => {
    //не вышли ли за пределы поля
    if (
      (snake[0][0] < 0 || snake[0][1] < 0) ||
      (snake[0][0] > 19 || snake[0][1] > 19)
    ) {
      gameOver(true);
    }

    //не столкнулись ли с препядствиями
    rocks.forEach(el => {
      if (isEqual(el, snake[0])) {
        gameOver(true);
      }
    });

    //не столкнулась ли голова с телом
    const snakeBody = cloneDeep([...snake].slice(1));
    snakeBody.forEach(el => {
      if (isEqual(el, snake[0])) {
        gameOver(true);
      }
    });
  }

  useInterval(() => {
    switch (direction) {
      case ('Up'):
        snakeUp();
        break;
      case ('Down'):
        snakeDown();
        break;
      case ('Left'):
        snakeLeft()
        break;
      case ('Right'):
        snakeRight();
        break;
      default:
        return;
    }
  }, 300);

  return (
    <div className="game">
      <Table />
      <Dialog />
    </div>
  );
}

export default Game;