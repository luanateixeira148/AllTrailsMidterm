import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

const TopContainer = styled.div`
  min-width: 381px;
  max-width: 381px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px "#828282";
`;

const TopContainerContent = styled.h3`
  margin-left: 15px;
`;

function TopNav() {
  return (
    <TopContainer>
      <BsArrowLeft size="2rem"  color="#428A13" />
      <TopContainerContent>

        Title
      </TopContainerContent>
    </TopContainer>
  )
}

export default TopNav;
