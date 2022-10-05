import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

export const Title =styled.h1`
    text-align: center;
    font-size: 40px;
    color: rgba(0, 0, 0, 0.5);
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 15px;
    justify-content: center;
`;

export const Item = styled.li`
    width: 270px;
    height: 360px;
    gap: 15px;
    list-style: none;

`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;

