import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {getCells} from "../services/Cells.js";
import _ from 'lodash';
import Cell from "./Cell";

const [cells, setCells ] = useState([])

function runShuffle () {
    return () => {
        
        let ArrayMinusMid = getCells().filter(cell=> cell.id !== 13);
        let shuffleNames = _.shuffle(ArrayMinusMid.map(cell=> cell.name));
     
        let cellsToShuffle = getCells();
        
        shuffleNames.splice(12, 0, `CONF CALL ${String.fromCodePoint(9917)}`)
         for (let i = 0; i < 25; i++ ) { 
        if (cellsToShuffle[i].id === 13) continue;
        cellsToShuffle[i].name = shuffleNames[i] 
    } 
        setCells(cellsToShuffle)
    }, []
}


export default runShuffle;
