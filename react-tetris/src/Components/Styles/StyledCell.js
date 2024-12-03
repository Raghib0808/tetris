import styled from "styled-components";

export const StyledCell = styled.div`
  width: 100%;
  height: 100%;
//   outline:solid white 6px;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);

   @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
