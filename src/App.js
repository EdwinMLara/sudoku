import './App.css';
import GameBoard from './componentes/GameBoard';
import React from 'react'

function Obj(id,row,col,value = undefined,tablero=undefined){
  this.id = id;  
  this.row = row;
  this.col = col;
  this.value = value;
  this.tablero = tablero;
}

const createSudoku = (probality) => {
  console.log("crateSudoku");
  let count = 1;
  let sudoku = [];
    for (let i=0;i<9;i++){
        sudoku[i] = [];
        for(let k=0;k<9;k++){
          sudoku[i][k] = new Obj(count,i,k);
          count+=1;
        }
    }
  return sudoku;
}

export const SudokuContext = React.createContext();

function App() {
  return (
    <div className="App">
      <SudokuContext.Provider value={createSudoku(0.3)}>
        <GameBoard/>
      </SudokuContext.Provider>
    </div>
  );
}

export default App;
