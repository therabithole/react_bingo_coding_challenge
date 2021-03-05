import React from 'react';

import Canvas from "./animatedBackground/Canvas"
import BoardHooks from './BoardHooks';

const Game = () => {

  
    return ( <section className="Game"> 
    <Canvas/>
    <BoardHooks/>
 </section> );
}
 
export default Game;
