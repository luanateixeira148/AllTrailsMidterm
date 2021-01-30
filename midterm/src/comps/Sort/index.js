import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 100px;
    min-height: 159px;
    height: 30%;
    width: 30%;
    display: flex;
    flex-direction: column;
`;
const SortButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-family: roboto;
    font-weight: 700;
    color: #428811;
    padding: 4px;
    align-self: flex-end;
`;
const SortBox = styled.div`
    display: ${props=>props.display ? props.display : "none"};
    width:auto;
    height:auto;
    border: 1px solid #428811;
    border-radius: 6px;
    padding: 5px;
    flex-direction: column;
    align-items: flex-start;
`;
const SortTitle = styled.text`
    font-size: 12px;
    font-family: roboto;
    font-weight: bold;
    color: #428811;
    padding: 3px;
`;
const SortText = styled.text`
    font-size: 10px;
    font-family: roboto;
    font-weight: 500
    color: #828282;
    padding: 2px;
`;


const Sort = ({display, onSortClick}) => {
    return <Container>
        <SortButton onClick={()=>{
            onSortClick();
            }}>SORT</SortButton>
        <SortBox>
            <SortTitle>Title</SortTitle>
            <SortText>Alphabetically: A - Z</SortText>
            <SortText>Alphabetically: Z - A</SortText>
            <SortTitle>Labels</SortTitle>
            <SortText>Alphabetically: A - Z</SortText>
            <SortText>Alphabetically: Z - A</SortText>
        </SortBox>
    </Container>
}

Sort.defaultProps = {
    display:"none",
    onSortClick:()=>{}
}

export default Sort;