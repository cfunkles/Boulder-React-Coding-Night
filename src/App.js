import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: ["","","","","","","","",""],
      winner: null
    };
  }
  onCellClick = async (i) => {
    const cells = this.state.cells
    if (cells[i] !== "" || this.checkForWin(cells)) {
      return
    }
    cells[i] = 'X'
    this.setState({cells})
    if (this.checkForWin(cells) !== "") {
      this.setState({winner:this.checkForWin(cells)})
    } else {
      await this.sleep(2000);
      cells[this.aiMove(cells)] = "O"
      if (this.checkForWin(cells) !== "") {
        this.setState({winner:this.checkForWin(cells)})
      }
    }
    this.setState({cells})
    console.log(this.state)
  }

  sleep = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));

  aiMove = (cells) => {
    while (!this.state.winner && !this.cellsFull(cells)) {
      const randomNumber = Math.floor(Math.random() * 9)
      if (cells[randomNumber] === "") {
        return randomNumber
      }
      console.log("Checking for death");
    }
  }

  cellsFull = (cells) => {
    for (var i = 0; i < cells.length; i++) {
      if (cells[i] === "") {
        return false
      }
    }
    return true;
  }

  checkForWin = (cells) => {
    if (cells[0] === cells[1] && cells[0] === cells[2] && cells[0] !== "") {
      return cells[0];
    } else if (cells[3] === cells[4] && cells[3] === cells[5] && cells[3] !== "") {
      return cells[3];
    } else if (cells[6] === cells[7] && cells[6] === cells[8] && cells[6] !== "") {
      return cells[6];
    } if (cells[0] === cells[3] && cells[0] === cells[6] && cells[0] !== "") {
      return cells[0];
    } else if (cells[1] === cells[4] && cells[1] === cells[7] && cells[1] !== "") {
      return cells[1];
    } else if (cells[2] === cells[5] && cells[2] === cells[8] && cells[2] !== "") {
      return cells[2];
    } else if (cells[0] === cells[4] && cells[0] === cells[8] && cells[0] !== "") {
      return cells[0];
    } else if (cells[2] === cells[4] && cells[2] === cells[6] && cells[2] !== "") {
      return cells[2];
    } else if (this.cellsFull(cells)) {
      return "tie";
    } else {
      return "" ;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Winner = {this.state.winner}</h1>
        <ul className="ticTacBoard">
          {this.state.cells.map((cell, i)=> {
            return <li key={i} onClick={()=>this.onCellClick(i)} className="cell">{cell}</li>
          })}
      </ul>
      </div>
    );
  }
}



export default App;
