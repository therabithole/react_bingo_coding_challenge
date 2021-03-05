import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import Cell from "./Cell";
import {getCells} from "../services/Cells.js";
import _, { update } from 'lodash' 
import "../styles/App.css";


import Success from './Success';


class Board extends Component {

state = {
matchedBlends: [],
blendLength: 0,

cells: [],
activeCells: [],
activeCellsId: []

};



componentDidMount() {

   let ArrayMinusMid = getCells().filter(cell=> cell.id !== 13);
   let shuffleNames = _.shuffle(ArrayMinusMid.map(cell=> cell.name));

   let cellsCopy = getCells();
   shuffleNames.splice(12, 0, `CONF CALL ${String.fromCodePoint(9917)}`)
    for (let i = 0; i < 25; i++ ) { 
            if (cellsCopy[i].id === 13) continue;
            cellsCopy[i].name = shuffleNames[i]
        }  

this.setState({cells: cellsCopy})

     
    }

    



HandleClick = (cell) => {
  

cell.active = !cell.active
this.setState({ cell: cell});

let activeCells = this.state.cells.filter((cell)=> cell.active == true)

this.setState({ activeCells: activeCells})

let activeCellsId = activeCells.map(activeCells => activeCells.id)
 
this.setState({activeCellsId: activeCellsId});

let winningBlends = [[1, 2, 3 ,4, 5],
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


let matched = (activeCellsId, winningBlends) =>
winningBlends.filter((winningBlend) =>
winningBlend.every(l =>
 activeCellsId.includes(l)));

let matchedBlends = matched(activeCellsId, winningBlends);
let status = 0;
matchedBlends ? status = 1 : status = 0;
this.setState({status: status})

console.log(matchedBlends)
this.setState({matchedBlends: matchedBlends })


}


render() {
const {cells } = this.state;
const {matchedBlends} = this.state;
const {length: count} = matchedBlends;


return (
    <section className="board">
   
<section className="bingoGame">
<span style={{color: 'white', fontSize: 50, fontFamily: 'Trebuchet MS'}}> 
Space Game {count >= 1 ? <span> {String.fromCodePoint( 127766)} </span> : <span> {String.fromCodePoint(127769)} </span> } 
 </span>


<section className="bingoResult"> 
{console.log("result is rendeirng")}
 {/* result on success */}
 {matchedBlends.length >= 1 ? <Success count={count}/> : <section className="noBlends">
     <div style={{fontSize: 50, fontFamily: 'Trebuchet MS'}}> Space Call: 0 {String.fromCodePoint(127766)}</div>
       </section>}
</section>

<section className="bingoGrid">
{console.log("grid is rendeirng")}
{cells.map(cell => (
<Cell cell={cell} HandleClick={this.HandleClick}/>
))}
</section>

</section> </section>  );
}
}
export default Board;

