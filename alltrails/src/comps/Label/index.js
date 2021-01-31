import React from 'react';
import styled from 'styled-components';
import Labeling from './label-icon.png';

const LabelBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    min-width:60px;
    min-height:18px;
    max-width: 100px;
    padding: 3px;
    padding-left: 10px;
    border-radius:15px;
    border: 1px solid #E5E5E5;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "none"};

    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    color: #414141;
`;
const LabelIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const Label = ({bgcolor, labelName}) => {
    return <LabelBox bgcolor={bgcolor}>
        <LabelIcon>
            <img src={Labeling} alt="Label" />
        </LabelIcon>
        {labelName}
    </LabelBox>
}

Label.defaultProps = {
    labelName:"Label",

}

export default Label;