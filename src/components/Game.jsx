import React, { Component } from 'react';
import Board from './Board';
import Canvas from "./animatedBackground/Canvas"



class Game extends Component {
    state = {  }
    render() { 
        return (
       <section className="Game"> 
       <Canvas/>
       <Board/>
    </section>
        );
    }
}
 
export default Game;