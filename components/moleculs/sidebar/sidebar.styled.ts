import styled from "styled-components";

export const MenuOverlay = styled.div`
  z-index: 10;
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;
  
  &.show{
    opacity: 1;
    visibility: visible;
  }
  &.hidden{
    opacity: 0;
    visibility: hidden;
  }
`;

export const MenuContents = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top:0;
  left:100%;
  width: 280px;
  height: 100%;
  padding: 6px;
  background-color: #222222;
  transition: all 0.2s ease-in-out;
  
  &.show{
    visibility: visible;
    transform:translateX(-100%);
  }
  &.hidden{
    visibility: hidden;
    transform: translateX(0%);
  }
`;