import React from "react";
// components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import {createStage} from "../gameHelper"
import { StyledTetris, StyledTetrisWrapper } from "./Styles/StyledTetris";

const Tetris=()=>{
    return(
    <StyledTetrisWrapper>
        <StyledTetris>
        <Stage stage={createStage()} />

        <aside>
            
            <div className="info">
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
            </div>
            <StartButton/>
        </aside>

        </StyledTetris>
    </StyledTetrisWrapper>
    
)
}


export default Tetris;