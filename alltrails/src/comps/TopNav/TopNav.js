import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import TextField from '@material-ui/core/TextField';

const TopContainer = styled.div`
  min-width: 411px;
  max-width: 411px;
  display: flex;
  position: fixed;
  top: 0%;
  left: 0%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 1px #e5e5e5;
  padding-left: 20px;
  padding-bottom: 5px;
  margin-top: 4%;
`;


function TopNav( addTitle ) {
  const [title, setTitle] = useState({
    id: "",
    notetitle: "",
    completed: false
  });

  function handleTitleInputChange(e) {
    setTitle({ ...title, notetitle: e.target.value});
  }

  function handleSubmitTitle(e) {
    e.preventDefault();
    if (title.task.trim()) {
      addTitle({ ...title, id: uuidv4() });
      setTitle({ ...title, notetitle: "" });
    }
  }

  return (
    <TopContainer onSubmit={handleSubmitTitle}>
      <Link to='/'>
      <BsArrowLeft size="2rem"  color="#428A13" />
      </Link>
      <TextField
        Label="None"
        placeholder="Title"
        type="text"
        name="notetitle"
        value={title.notetitle}
        onChange={handleTitleInputChange}
        InputProps = {{ disableUnderline: true, 
        style: {
          fontWeight: "bold",
          fontSize: "22px",
          marginLeft: "7px"
        }}}
        style={{
          width: "75%",
        }}
      />
    </TopContainer>
  )
}

export default TopNav;
