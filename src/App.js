import React from 'react';

import Game from './components/game/game';
import { SnakeState } from './context/snake/SnakeState';
import { DialogState } from './context/dialog/DialogState';
import { FieldState } from './context/field/FieldState';
import { AppleState } from './context/apple/AppleState';
import { RocksState } from './context/rocks/RocksState';

function App() {

  return (
    <FieldState>
      <DialogState>
        <SnakeState>
          <AppleState>
            <RocksState>
              <Game />
            </RocksState>
          </AppleState>
        </SnakeState>
      </DialogState>
    </FieldState>
  );
}

export default App;