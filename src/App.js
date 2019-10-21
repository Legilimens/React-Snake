import React, { useState, useEffect } from 'react';
import Table from './components/table/table';
import { cloneDeep, isEqual } from 'lodash';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';

function App() {

  const getRandomCoordinates = () => {
    const min = 0;
    const max = 19;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let exist = false;
    snake.map(el => isEqual(el, [x, y]) ? exist = true : null);
    rocks.map(el => isEqual(el, [x, y]) ? exist = true : null);
    return (!exist) ? [x, y] : (getRandomCoordinates());
  }

  const initialSnake = [
    [10, 11],
    [10, 12],
    [11, 12],
    [12, 12],
  ];
  const initialRocks = [
    [6, 7],
    [2, 15],
  ];
  const initialDirection = 'Left'

  const [field, setField] = useState(Array(20).fill(Array(20).fill(0)));
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState(initialDirection);
  const [rocks, setRocks] = useState(initialRocks);
  const [apple, setApple] = useState(() => getRandomCoordinates(snake, rocks));
  const [dialogOpen, setDialogOpen] = React.useState(false);

  useEffect(() => {
    const controlButtons = (e) => {
      switch (e.key) {
        case ('ArrowUp'):
          if (direction !== 'Down' && !dialogOpen) {
            snakeUp();
          }
          break;
        case ('ArrowDown'):
          if (direction !== 'Up' && !dialogOpen) {
            snakeDown();
          }
          break;
        case ('ArrowLeft'):
          if (direction !== 'Right' && !dialogOpen) {
            snakeLeft()
          }
          break;
        case ('ArrowRight'):
          if (direction !== 'Left' && !dialogOpen) {
            snakeRight();
          }
          break;
        default:
          return;
      }
    };
    window.addEventListener('keyup', controlButtons);
    checkGameOver();
    eatApple();

    return () => {
      window.removeEventListener('keyup', controlButtons);
    };
  }, [snake]);

  const gameOver = () => {
    setDialogOpen(true);
    setApple(getRandomCoordinates(snake, rocks));
    setDirection(initialDirection);
    setSnake(initialSnake);
  };

  const eatApple = () => {
    if (isEqual(snake[0], apple)) {
      setApple(getRandomCoordinates(snake, rocks));
      setSnake([...snake, cloneDeep(snake).pop()]);
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

  const snakeUp = () => {
    setDirection('Up');
    const snakeCopy = cloneDeep(snake);
    setSnake([[--snakeCopy[0][0], snakeCopy[0][1]], ...snake.slice(0, -1)]);
  }

  const snakeDown = () => {
    setDirection('Down');
    const snakeCopy = cloneDeep(snake);
    setSnake([[++snakeCopy[0][0], snakeCopy[0][1]], ...snake.slice(0, -1)]);
  }

  const snakeLeft = () => {
    setDirection('Left');
    const snakeCopy = cloneDeep(snake);
    setSnake([[snakeCopy[0][0], --snakeCopy[0][1]], ...snake.slice(0, -1)]);
  }

  const snakeRight = () => {
    setDirection('Right');
    const snakeCopy = cloneDeep(snake);
    setSnake([[snakeCopy[0][0], ++snakeCopy[0][1]], ...snake.slice(0, -1)]);
  }

  return (
    <div className="App">
      <Table
        field={field}
        snake={snake}
        apple={apple}
        rocks={rocks}
      />
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Game over :("}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Игра окончена. Но не расстраивайтесь! Попробуйте снова, и Вам обязательно повезёт!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary" autoFocus>
            Новая игра
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;