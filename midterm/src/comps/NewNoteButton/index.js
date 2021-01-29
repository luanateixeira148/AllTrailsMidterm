import React from 'react';
import styled from 'styled-components';
import Plus from './plus.png';

const NewButton = styled.div`
    width: 59px;
    height: 59px;
    border-radius:50%;
    background-color: #428A13;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NewNoteButton = ({}) => {
    return <NewButton>
        <img src={Plus} alt="Plus" />
    </NewButton>
}

NewNoteButton.defaultProps = {
}

export default NewNoteButton;