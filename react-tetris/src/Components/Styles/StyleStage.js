import styled from "styled-components";

export const StyleStage = styled.div`
  display: grid;
   grid-template-rows: repeat(
    ${({ height }) => height || 0}, 
    calc(25vw / ${({ width }) => width || 1})
  );
  grid-template-columns: repeat(${({ width }) => width || 1}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 95%;
  height:100%;
  background: #111;

   @media (max-width: 768px) {
      width: 80%;
      min-height:900px
      margin-top: 20px;
    }
`;
