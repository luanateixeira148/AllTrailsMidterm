import { Notes } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import RightArrow from '../NoteCard/right-arrow.png';
import {notes} from '../../database';

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
const NoteItemText = styled.text``;

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

const fakedb = [
    {
          id: 1,
          title: "Hiking gears to buy",
          item1: "trail shoes",
          item2: "mask",
          item3: "wool hat",
          completed: false
    }              
  ]


const NoteCard = ({contents}) => {
    return <div>
    {contents.map(   o => <NoteCardContainer>
        <NoteTitleBox>{o.title}</NoteTitleBox>
        <NoteItems>
            <NoteItemBox>
                <NoteItemIcon />
                <NoteItemText>{o.item1}</NoteItemText>
            </NoteItemBox>
            <NoteItemBox>
                <NoteItemIcon />
                <NoteItemText>{o.item2}</NoteItemText>
            </NoteItemBox>
            <NoteItemBox>
                <NoteItemIcon />
                <NoteItemText>{o.item3}</NoteItemText>
            </NoteItemBox>
        </NoteItems>
        <MoreIcon>...</MoreIcon>
        <NoteFooter>
            <RightBox>
                <SeeList>See List</SeeList>
                <img src={RightArrow} alt="RightArrow" />
            </RightBox>
        </NoteFooter>
    </NoteCardContainer>)}
    </div>
}

NoteCard.defaultProps = {
    contents: fakedb,
}

export default NoteCard;