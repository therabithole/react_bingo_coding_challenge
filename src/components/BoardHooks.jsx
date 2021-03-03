import React, {useState, useEffect, useMemo, useCallback} from 'react';
import "../styles/App.css";
import {getCells} from "../services/Cells.js";
import _ from 'lodash';
import Cell from "./Cell";


function BoardHooks () {

    const [cells, setCells ] = useState([])
    const [matchedBlends, setMatchedBlends] = useState([])
    const [activeCells, setActiveCells] = useState([])
    const [activeCellsId, setActiveCellsId] = useState([])
    const [success, setSuccess ]  = useState(0)
   
   // shuffle 
    const runShuffle = useCallback(()  => {
        let ArrayMinusMid = getCells().filter(cell=> cell.id !== 13);
        let shuffleNames = _.shuffle(ArrayMinusMid.map(cell=> cell.name));
     
        let cellsToShuffle = getCells();
        
        shuffleNames.splice(12, 0, `CONF CALL ${String.fromCodePoint(9917)}`)
         for (let i = 0; i < 25; i++ ) { 
        if (cellsToShuffle[i].id === 13) continue;
        cellsToShuffle[i].name = shuffleNames[i] 
    } 
        setCells(cellsToShuffle)
    }, [])


    // shuffle array on initial reload.
    useEffect(() => {
        runShuffle()

    }, [runShuffle])


    // outside

    const thisHandleClick = (cell) => {

        cell.active = !cell.active;
        setActiveCells(cells.filter((cell)=> cell.active == true));
        setActiveCellsId(activeCells.map(activeCells => activeCells.id));
        

    }
    // handle cell click

    useEffect(()=> {

        console.log(activeCellsId)
    })

   
    return (
        <section className="board">
        <section className="bingoGame">  </section>
        <section className="bingoResult"> Result {console.log("result is rendering")}</section>
        <section className="bingoGrid">
        {console.log("grid is rendeirng")}
        {cells.map(cell => (
     
        <Cell cell={cell} 
        HandleClick={thisHandleClick}/>
        ))}
        </section>

    </section>
    )
}

export default BoardHooks;

