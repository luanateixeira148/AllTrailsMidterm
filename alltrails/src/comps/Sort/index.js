import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 90%;
    min-height: 150px;
    display: flex;
    flex-direction: column;
`;
const SortButton = styled.div`
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
    display: ${props=>props.expanded ? "flex" : "none"};
    background-color: #FFFFFF;
    min-width:105px;
    min-height: 65px;
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
const SortText = styled.div`
    ${props=>props.sortbgcolor && "background-color:"+props.sortbgcolor+";"}
    width:100%;
    font-size: 10px;
    font-family: roboto;
    font-weight: 500;
    color: #828282;
    padding: 2px;
    margin-top: 5px;
`;

const Sort = ({onClickAlphAZ, onClickAlphZA, name, sortbgcolor}) => {
    const [expanded, setExpanded] = useState(false);
    const [clickedSort, setClickedSort] = useState(null);

    const handleClickedSort = (name, sortbgcolor) => {
        setClickedSort(name, sortbgcolor);
    }

    return <Container>
        <SortButton 
            onClick={()=>{
                setExpanded(!expanded);
            }}
        >SORT</SortButton>
        <SortBox 
            expanded={expanded}
        >
            <SortTitle>Sort by Title</SortTitle>
            <SortText
                onClick={()=>{
                    onClickAlphAZ(name);
                }}
                name="AZ"
                sortbgcolor={clickedSort === "AZ" ? "red" : null}
            >Alphabetically: A - Z</SortText>
            <SortText
                onClick={()=>{
                    onClickAlphZA(name);
                }}
                name="ZA"
                sortbgcolor={clickedSort === "ZA" ? "red" : null}
            >Alphabetically: Z - A</SortText>
        </SortBox>
    </Container>
}

Sort.defaultProps = {
    sortbgcolor:null,
    onClickAlphAZ: ()=>{},
    onClickAlphZA: ()=>{},
}

export default Sort;