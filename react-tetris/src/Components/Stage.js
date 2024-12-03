import React from "react";
import Cell from "./Cell";

// importing the styled component;
import {StyleStage} from "./Styles/StyleStage"

const Stage=({stage})=>{
    
    
    return(
        <StyleStage width={stage[0].length} height={stage.height} >
            {
                stage.map(row=>row.map((cell,x)=>{
                     
                    return <Cell  key={x} type={cell[0]}/> 
                    }
                ))
            }
        </StyleStage>
    )
}

export default Stage;