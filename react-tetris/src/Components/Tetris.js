import React, { useState } from "react";
// components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

 import { StyledTetris, StyledTetrisWrapper } from "./Styles/StyledTetris";

// creating the stage;
import { createStage } from "../gameHelper";
// custom hoooks
import { usePlayer } from "../Hoooks/usePlayer";
import { useStage } from "../Hoooks/useStage";

const Tetris=()=>{
    
    console.log("re-render");

    
    const [dropTime,setDropTime]=useState(null);
    const [gameOver,setGameOver]=useState(false)

    const [player,updatePlayerPos,resetPlayer]=usePlayer();
    
    const [stage,setStage]=useStage(player)
    
    // moving the player;
    const movePlayer = dir =>{
            updatePlayerPos({x:dir,y:0})
    }

    const startGame =()=>{
                //  setStage(createStage());
                resetPlayer();
    }

    
    const drop =()=>{
        updatePlayerPos({x:0,y:1,collided:false})
    }

    const dropPlayer =()=>{
                drop();
    }

    const move=({keyCode})=>{
            if(!gameOver)
            {
                if(keyCode===37)
                    movePlayer(-1);
                else if(keyCode===39)
                    movePlayer(1);
                else if(keyCode===40)
                    dropPlayer();
            }
    }
    

    return(
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e=>move(e)}>
        <StyledTetris>
        <Stage stage={stage} />

        <aside>
            {
                gameOver?(<Display gameOver={gameOver} text="Game Over"></Display>):(
            
            <div className="info">
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
            </div>
            )}
            <StartButton callback={startGame}/>
        </aside>


        </StyledTetris>
    </StyledTetrisWrapper>
    
)
}


export default Tetris;