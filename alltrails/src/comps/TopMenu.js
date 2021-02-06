import React from "react";
import styled from 'styled-components';

const Container = styled.menu`
position: absolute;
top: 15px;
display: flex;
flex-direction: row;
margin-top: 35px;
left:10px;
`;
const Item1 = styled.div`
padding: 10px;
`;
const Item2 = styled.div`
padding: 10px;
color: #428A13;
`;
const Item3 = styled.div`
padding: 10px;
`;

const TopMenu = () => {
    return <Container>
        <Item1>
            Favorites
        </Item1>
        <Item2>
            Lists
        </Item2>
        <Item3>
            Maps
        </Item3>
    </Container>
}

TopMenu.defaultProps = {

}

export default TopMenu;