import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: ["","","","","","","","",""],
    };
  }
  onCellClick = (i) => {
    const cells = this.state.cells
    cells[i] = 'X'
    this.setState({cells})

    console.log(this.state)
  }

  aiMove = (cells) => {

  }

  render() {
    return (
      <div className="App">
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
