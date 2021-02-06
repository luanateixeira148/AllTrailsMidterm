import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

const TopContainer = styled.div`
  min-width: 411px;
  max-width: 411px;
  display: flex;
  position: fixed;
  top: 0%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px #e5e5e5;
  padding-left: 20px;
  margin-top: 4%;
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
