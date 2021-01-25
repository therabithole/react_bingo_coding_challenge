import React, { Component } from 'react';
import Cell from "./Cell";
import {getCells} from "../services/Cells.js";
import "../styles/App.css";

import Success from './Success';

class Board extends Component {

state = {
bingo: false,
cells: [],
activeCells: [],
activeCellsId: []

};
componentDidMount() {
this.setState({cells: getCells()})
}
HandleClick = (cell) => {
cell.active = !cell.active
this.setState({ cell: cell});
let activeCells = this.state.cells.filter((cell)=> cell.active == true)

this.setState({ activeCells: activeCells})

let activeCellsId = activeCells.map(activeCells => activeCells.id)
 
this.setState({activeCellsId: activeCellsId});

let lines = [[1, 2, 3 ,4, 5],
[6, 7, 8, 9, 10],
[11, 12,13, 14, 15],
[16, 17, 18, 19, 20],
[21, 22, 23, 24, 25],
[1, 6, 11, 16,21],
[2, 7, 12, 17, 22],
[3, 8, 13, 18, 23],
[4, 9, 14, 19, 24],
[5, 10, 15, 20, 25],
[1, 7, 13, 19, 25],
[5, 9, 13, 17, 21]];
let winner = false;
let winCheck = (activeCellsId, lines) =>
lines.some((line) =>
line.every(element => activeCellsId.includes(element)));
let mybingo = winCheck(activeCellsId, lines);

this.setState({bingo: mybingo})
// return console.log(this.state.activeCellsId)

}

render() {
const {cells } = this.state;

return (
    <section className="board">
<section className="bingoGame">
<section className="output"> 

 {this.state.bingo === true ? <Success/> : 
 <section 
 className="gameFail" 
 style={{color: "white"}}>
     <div style={{fontSize: 50, fontFamily: 'Trebuchet MS'}}> Space Call {String.fromCodePoint(127766)}</div>
       </section>}
</section>

<section className="bingoGrid">
{cells.map(cell => (
<Cell cell={cell} HandleClick={this.HandleClick}/>
))}
</section>

</section> </section>  );
}
}
export default Board;

