import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh; /* This is fine for the outermost container to cover the viewport */

  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 20px 0;
    align-items: flex-start; /* Adjust alignment for smaller screens */
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  flex-grow: 1; /* Allow this to grow and take available height dynamically */
  gap: 40px;
  padding: 0 20px;
  height:90%;
  @media (max-width: 1024px) {
    gap: 30px;
    max-width: 750px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    max-width: 100%;
    min-height: auto; /* Remove static min-height for a more flexible layout */
  }

  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 350px;
    flex-grow: 1; /* Make the game-container dynamically adjust height */

    @media (max-width: 768px) {
      max-width: 100%;
      height: 100%;
      width: 100%;
    }
  }

  .game-board {
    width: 100%;
    
    max-width: 250px;
    aspect-ratio: 1 / 2; /* Keeps the aspect ratio dynamic */
    background: #222;
    border: 2px solid #333;

    @media (max-width: 768px) {
      justify-self: center;
      align-self: center;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 250px;
    padding: 20px;
    background: #111;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-width: 100%;
      width: auto;
      padding: 15px;
      margin-top: 20px;
    }
  }
`;
