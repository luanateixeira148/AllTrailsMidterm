import React from 'react';
import styled from 'styled-components';
import { BsSearch, BsFillHeartFill, BsPerson } from 'react-icons/bs';
import { RiRecordCircleLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0%;
  min-width: 411px;
  max-width: 411px;
  max-height: 381px;
  /* min-height: 57px;
  max-height: 57px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-top: solid #e5e5e5 1px;
  padding-top: 10px;
`;


const Search = styled.div`
  color: #828282;
`;

const Title = styled.p`
  margin-top: 0px;
`;

const Plan = styled.div`
  color: #428811;

`;

const Record = styled.div`
  color: #828282;

`;

const History = styled.div`
  color: #828282;

`;

const Profile = styled.div`
  color: #828282;

`;

function BottomNav() {
  return (
    <BottomContainer>

        <Search>
        <BsSearch color="#828282" size="20"/>
          <Title>Search</Title>
        </Search>

        <Plan>
          <BsFillHeartFill color="#428811" size="25" />
          <Title>Plan</Title>
        </Plan>

        <Record>
          <RiRecordCircleLine size="25" color="#828282" />
          <Title>Record</Title>
        </Record>

        <History>
          <GoLocation color="#828282" size="25"/>
          <Title>History</Title>
        </History>

        <Profile>
          <BsPerson color="#828282" size="25" />
          <Title>History</Title>
        </Profile>

    </BottomContainer>
  )
}

export default BottomNav;
