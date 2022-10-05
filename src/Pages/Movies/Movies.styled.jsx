import styled from 'styled-components';

export const Form =styled.form`
display: flex;
    text-align: center;
    margin-top: 30px;
    justify-content: center;
`;

export const Input = styled.input`
    margin-right: 20px;
    width: 400px;
    height: 40px;
    font-size: 24px;
    border-radius: 4px;
    border: 2px solid transparent;
    background-color: antiquewhite;
`;

export const Button = styled.button`
    width: 120px;
    height: 46px;
    background-color: grey;
    color: white;
    border-radius: 4px;
    border: 2px solid transparent;
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
