import React from 'react';
import styled from 'styled-components';
import { BsSearch, BsFillHeartFill, BsPerson } from 'react-icons/bs';
import { RiRecordCircleLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';

const BottomContainer = styled.div`
  border-top: solid 1px "#9f9f9f";
  /* position: fixed;
  bottom: 0px; */
  min-width: 381px;
  max-height: 381px;
  /* min-height: 57px;
  max-height: 57px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

// const Icons = styled.div`
 
// `;

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

      {/* <Icons> */}
        <Search>
        <BsSearch color="#828282" size="20"/>
          <Title>Search</Title>
        </Search>

        <Plan>
          <BsFillHeartFill color="#428811" size="20" />
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
      {/* </Icons> */}

    </BottomContainer>
  )
}

export default BottomNav;
