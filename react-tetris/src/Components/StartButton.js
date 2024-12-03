import React from "react";
import {StyelsStartButton} from './Styles/StylesStartButton'
const StartButton=({callback})=>{
    return(
        <StyelsStartButton onClick={callback} >Start Game</StyelsStartButton>
    )
}

export default StartButton;