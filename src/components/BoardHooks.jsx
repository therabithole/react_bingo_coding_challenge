import React, {useState, useEffect, useMemo, useCallback} from 'react';
import "../styles/App.css";
import {getCells} from "../services/Cells.js";
import _ from 'lodash';
import Cell from "./Cell";



function BoardHooks () {

    const [cells, setCells ] = useState([])
    const [activeCells, setActiveCells] = useState([])
    const [activeCellsId, setActiveCellsId] = useState([])
    const [matchedBlends, setMatchedBlends] = useState([])
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

    const runMatch = useCallback((cell) => {
       
       
      //  console.log(cell, "selected Cell")
        cell.active = !cell.active;
        setActiveCells(cells.filter((cell)=> cell.active == true));
      //  console.log(activeCells, "all active/selected cells")
        setActiveCellsId(activeCells.map(activeCells => activeCells.id));
      //  console.log(activeCellsId, "all active/selected cells IDS")
     

        let winningBlends = [
            [1, 2, 3 ,4, 5],
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
            
            
            let matchFormula = (activeCellsId, winningBlends) =>
            winningBlends.filter((winningBlend) =>
            winningBlend.every(l =>
             activeCellsId.includes(l)));
            
            let result = matchFormula(activeCellsId, winningBlends);
            console.log("result", result)
            setMatchedBlends(result)
           
        

    })
    // handle cell click

    useEffect(()=> {

      //  console.log(activeCellsId, "checking effect stand-alone / activeCellsId")
      console.log(matchedBlends, "match")
    })

   
    return (
        <section className="board">
        <section className="bingoGame">  </section>
        <section className="bingoResult"> Result {console.log("result is rendering")}</section>
        <section className="bingoGrid">
        {console.log("grid is rendeirng")}
        {cells.map(cell => (
     
        <Cell cell={cell} 
        HandleClick={runMatch}/>
        ))}
        </section>

    </section>
    )
}

export default BoardHooks;

