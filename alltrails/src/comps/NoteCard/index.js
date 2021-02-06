import React from 'react';
import styled from 'styled-components';
import RightArrow from '../NoteCard/right-arrow.png';

const NoteCardContainer = styled.div`
    width:88%;    
    min-width: 300px;
    min-height: 160px;
    border: 1px solid #E5E5E5;
    border-radius: 6px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    margin: 3%;
    padding: 3%;
`;
const NoteTitleBox = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #414141;
    padding-bottom: 5px;
`;
const NoteItems = styled.div`

`;
const NoteItemBox = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    color: #414141;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const NoteItemIcon = styled.div`
    min-width: 12px;
    min-height: 12px;
    border: 1px solid #B1B1B1;
    border-radius: 1px; 
    margin: 5px;
`;
const NoteFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;
const MoreIcon = styled.div`

`;
const SeeList = styled.div`
    padding-right: 5px;
    
`;
const RightBox = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;
const NoteCard = ({NoteTitle, NoteItem}) => {
    return <NoteCardContainer>
        <NoteTitleBox>{NoteTitle}</NoteTitleBox>
        <NoteItems>
            <NoteItemBox>
                <NoteItemIcon />
                {NoteItem}
            </NoteItemBox>
            <NoteItemBox>
                <NoteItemIcon />
                {NoteItem}
            </NoteItemBox>
            <NoteItemBox>
                <NoteItemIcon />
                {NoteItem}
            </NoteItemBox>
        </NoteItems>
        <MoreIcon>...</MoreIcon>
        <NoteFooter>
            <RightBox>
                <SeeList>See List</SeeList>
                <img src={RightArrow} alt="RightArrow" />
            </RightBox>
        </NoteFooter>
    </NoteCardContainer>
}

NoteCard.defaultProps = {
    NoteTitle:"Title",
    NoteItem:"Item"
}

export default NoteCard;