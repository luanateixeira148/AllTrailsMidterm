import React from "react";
import styled from 'styled-components';
import disc from '../comps/icons/disc.png';
import favorite from '../comps/icons/favorite.png';
import location from '../comps/icons/location.png';
import person from '../comps/icons/person.png';
import search from '../comps/icons/search.png';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Img1 = styled.image`
padding: 10px;
`;

const Img2 = styled.image`
padding: 10px;
`;

const Img3 = styled.image`
padding: 10px;
`;

const Img4 = styled.image`
padding: 10px;
`;

const Img5 = styled.image`
padding: 10px;
`;

const BottomMenu = () => {
    return (
    <Container>
        <Img1>
     <img src={search}alt="search" width="33.5px" height="33.5px"/>
        <div>Explore
        </div>
        </Img1>
        <Img2>
     <img src={favorite}alt="favorite" width="33.5px" height="33.5px"/>
     <div>Plan
        </div>
        </Img2>
        <Img3>
     <img src={disc}alt="disc" width="33.5px" height="33.5px"/>
     <div>Record
        </div>
        </Img3>
        <Img4>
     <img src={location}alt="location" width="33.5px" height="33.5px"/>
     <div>History
        </div>
        </Img4>
        <Img5>
     <img src={person}alt="person" width="33.5px" height="33.5px"/>
     <div>Profile
        </div>
        </Img5>
        

    </Container>
    );
   
}

BottomMenu.defaultProps = {

}

export default BottomMenu;