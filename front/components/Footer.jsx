import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    width: 100%;
    height: 600px;

    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("https://t3.ftcdn.net/jpg/05/04/62/46/240_F_504624613_tqHCjOwF0RBnMbPiTpI1KAC4VrOEqiBV.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
`;

const FooterBox__Top = styled.div`
    width: 100%;
    height: 85%;

    border-bottom: 1px solid #fff;

    display: flex;
    flex-direction: row;
`;

const FooterBox__TopBox = styled.div`
    width: 33%;
    height: 100%;
    margin: 0px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterBox__TopM = styled.div`
    width: 33%;
    height: 100%;
    margin: 0px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const FooterBox__Bottom = styled.div`
    width: 100%;
    height: 15%;
`;

const FooterBox__Titile = styled.p`

`;

const FooterBox__Desc = styled.p`

`;

const FooterBox__logo = styled.p`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;


const Footer = () => {
    return <FooterBox>
        <FooterBox__Top>
            <FooterBox__TopBox>
                <FooterBox__logo>COCOFARM</FooterBox__logo>
            </FooterBox__TopBox>
            <FooterBox__TopM></FooterBox__TopM>
            <FooterBox__TopBox></FooterBox__TopBox>
        </FooterBox__Top>
        <FooterBox__Bottom></FooterBox__Bottom>
    </FooterBox>;
}

export default Footer;