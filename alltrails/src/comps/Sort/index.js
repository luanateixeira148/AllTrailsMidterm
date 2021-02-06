import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 100px;
    min-height: 159px;
    height: 30%;
    width: 30%;
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
    // background-color: ${props=>props.selected ? "#ECF3E7" : "none"};
    width:100%;
    font-size: 10px;
    font-family: roboto;
    font-weight: 500;
    color: #828282;
    padding: 2px;
    margin-top: 5px;
`;


const Sort = ({onClickAlphAZ, onClickAlphZA}) => {
    const [expanded, setExpanded] = useState(false);
    // const [selected1, setSelected1] = useState(false);
    // const [selected2, setSelected2] = useState(false);
    // const [selected3, setSelected3] = useState(false);
    // const [selected4, setSelected4] = useState(false);

    return <Container>
        <SortButton onClick={()=>{
            setExpanded(!expanded);
        }}>SORT</SortButton>
        <SortBox expanded={expanded}>
            <SortTitle>Title</SortTitle>
            <SortText
            // selected1={selected1}
            onClick={()=>{onClickAlphAZ()
                
                // setSelected1(!selected1); setSelected2(false); 
                // setSelected3(false); setSelected4(false);
            }}>Alphabetically: A - Z</SortText>
            <SortText
            // selected2={selected2}
            onClick={()=>{onClickAlphZA()
                // setSelected1(false); setSelected2(!selected2); 
                // setSelected3(false); setSelected4(false);
            }}>Alphabetically: Z - A</SortText>
            {/* <SortTitle>Labels</SortTitle>
            <SortText
            selected3={selected3}
            onClick={()=>{
                setSelected1(false); setSelected2(false); setSelected3(!selected3); setSelected4(false);
            }}>Alphabetically: A - Z</SortText>
            <SortText
            selected4={selected4}
            onClick={()=>{
                setSelected1(false); setSelected2(false); setSelected3(false); setSelected4(!selected4);
            }}>Alphabetically: Z - A</SortText> */}
        </SortBox>
    </Container>
}

Sort.defaultProps = {
    onClickAlphAZ: ()=>{},
    onClickAlphZA: ()=>{},
}

export default Sort;