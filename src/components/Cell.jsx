import React, { Component } from 'react';
const Cell = props => {
    
    const {cell, HandleClick} = props;
    
    return (
  <React.Fragment> 
    
 <button 
    
    className={cell.active ? "highlighted": "nonHighlighted"}
    disabled={cell.id ==13}
    onClick={()=> HandleClick(cell)}> 
    <div> {cell.id} </div>
    {cell.name}
    </button>



      </React.Fragment>

       

      );
}
 
export default Cell;


