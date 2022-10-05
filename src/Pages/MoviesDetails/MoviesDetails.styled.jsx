import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Box = styled.div`
    display: flex;
    

`;

export const Image = styled.img`
    display: block;
    width: 400px;
    height: 600px;
    margin-right: 30px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 36px;
`;

export const Text = styled.p`
    text-align: center;
    font-size: 24px;

`;

export const Subtitle = styled.h2`
     text-align: center;
     font-size: 32px;
`;

export const Pretitle = styled.h3`
     text-align: center;
     font-size: 28px;
`;

export const Item = styled.li`
    font-size: 24px;
`;

export const Smalltitle = styled.h4`
    font-size: 24px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
`;

export const Itemlink = styled.li`
    list-style: none;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
 
  font-weight: 500;
  border: 1px solid transparent;
  color: white;
    background-color: blue;

    &.active {
    color: black;
    background-color: grey;
  }


`;