import React from "react";
import styled from "styled-components";
import axios from "axios";
import {} from "antd";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    
    background-color: red;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBox = styled.div`
    width: 80%;
    height: 25%;

    background-color: aqua;
`;

const BottomBox = styled.div`
    width: 80%;
    height: 75%;

    background-color: aquamarine;

    display: flex;
    flex-direction: row;
`;

const BottomLift = styled.div`
    width: 40%;
    height: 100%;

    background-color: #7ea095;
`;

const BottomRight = styled.div`
    width: 60%;
    height: 100%;

    background-color: #7e7a6a;
`;

const AdminIndex = () => {
    return (
        <Wrapper>
            <TopBox></TopBox>
            <BottomBox>
                <BottomLift></BottomLift>
                <BottomRight></BottomRight>
            </BottomBox>
        </Wrapper>
    )
}

export default AdminIndex;