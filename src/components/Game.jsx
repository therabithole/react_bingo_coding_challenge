import React from 'react';
import BoardHooks from './BoardHooks';
import Canvas from "./animatedBackground/Canvas"

const Game = () => {

  
    return ( <section className="Game"> 
    <Canvas/>
    <BoardHooks/>
 </section> );
}
 
export default Game;
