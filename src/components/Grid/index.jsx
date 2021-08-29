import React from "react";
import styled from "styled-components";

export const Grid = styled.main`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 30px;
align-items: center;
max-width: 960px;
margin: 0 auto;
`;

export const CardContainer = styled.article`
 border: 1px solid #ccc;
 box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
 height: 300px;
 overflow: hidden;
`;

export const TitleContainer = styled.div`
  padding: 0 2px 2px;
  text-align: center;
`;

export const GridImage = styled.div`
  flex-grow: 1;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

const GridItemWrapper = styled.div`
  box-sizing: border-box;
  :before {
    content: "";
  }
`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);
