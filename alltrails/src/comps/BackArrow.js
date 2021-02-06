import React from "react";
import styled from 'styled-components';
import arrow from '../comps/icons/arrow.png';

const Container = styled.div`
    display: flex; 
`;


const BackArrow = () => {
    return (
    <Container>
     <img src={arrow} width="30px" height="30px"/>
     Places I want to go
    </Container>
    )
}

export default BackArrow;