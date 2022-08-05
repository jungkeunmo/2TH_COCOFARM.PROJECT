import React from "react";
import styled from "styled-components";
import axios from "axios";
import {} from "antd";

const Wrapper = styled.div`
    width: 100%;

    background-color: red;

    display: flex;
    flex-direction: column;
    padding: 15px;
`;

const TopBox = styled.div`
    width: 100%;
    height: 170px;

    background: linear-gradient( to left, #d37272 15%, #753b3b 85% );

    border-radius: 15px;
`;

const BottomBox = styled.div`
    width: 100%;
    height: 75%;

    background-color: aquamarine;

    display: flex;
    flex-direction: row;
`;

const BottomLift = styled.div`
    width: 35%;
    height: 100%;

    background-color: #7ea095;

    display: flex;
    flex-direction: column;
`;

const BLBox = styled.div`
    width: 95%;
    height: ${(props) => props.height || "350px"};

    background-color: aqua;

    margin-top: 10px;

    border-radius: 14px;
`;

const BottomRight = styled.div`
    width: 65%;
    height: 100%;

    background-color: #7e7a6a;
`;

const AdminIndex = () => {
    return (
        <Wrapper>
            <TopBox></TopBox>
            <BottomBox>
                <BottomLift>
                    <BLBox height="400px"></BLBox>
                    <BLBox></BLBox>

                </BottomLift>
                <BottomRight></BottomRight>
            </BottomBox>
        </Wrapper>
    )
}

export default AdminIndex;