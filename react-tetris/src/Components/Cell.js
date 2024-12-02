import React from "react";
import { StyledCell } from "./Styles/StyledCell"
import { TETROMINOS } from "../tetrominos";


const Cell=({type})=>{
    return(
        <div>
            
        {/* <div>cell</div> */}
         <StyledCell>cell</StyledCell>
        </div>
    )
}

export default Cell;