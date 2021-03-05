import React, { useMemo, useEffect } from 'react';

const Cell = props => {
    
    const {cell, HandleClick} = props;

    useEffect(()=> {
      console.log("cell component re-rendered / useEffect")
    }, [props.cell])
    

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
 
export default React.memo(Cell);


