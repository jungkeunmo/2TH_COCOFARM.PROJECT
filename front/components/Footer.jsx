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
`;

const FooterBox__TopBoxicon = styled.div`
    width: 100%;
    height: 50%;
    margin: 0px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const FooterBox__TopM = styled.div`
    width: 33%;
    height: 100%;
    margin: 0px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const FooterBox__TopMBox = styled.div`
    width: 33%;
    height: 100%;
    margin: 0px 10px;

    display: flex;
    flex-direction: column;
`;

const FooterBox__Bottom = styled.div`
    width: 100%;
    height: 15%;
    padding: 30px 50px;
`;

const FooterBox__Titile = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #fff;

    margin-top: 90px;
`;

const FooterBox__Desc = styled.p`
    font-size: 16px;
    color: #fff;
`;

const FooterBox__logo = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #fff;
`;


const Footer = () => {
    return <FooterBox>
        <FooterBox__Top>
            <FooterBox__TopBox>
                <FooterBox__TopBoxicon>
                    <FooterBox__logo>COCOFARM</FooterBox__logo>
                </FooterBox__TopBoxicon>
                <FooterBox__TopBoxicon>
                </FooterBox__TopBoxicon>
            </FooterBox__TopBox>
            <FooterBox__TopM>
                <FooterBox__TopMBox>
                    <FooterBox__Titile>COCOFARM</FooterBox__Titile>
                    <FooterBox__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</FooterBox__Desc>
                </FooterBox__TopMBox>
                <FooterBox__TopMBox>
                    <FooterBox__Titile>COCOFARM</FooterBox__Titile>
                    <FooterBox__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</FooterBox__Desc>
                </FooterBox__TopMBox>
                <FooterBox__TopMBox>
                    <FooterBox__Titile>COCOFARM</FooterBox__Titile>
                    <FooterBox__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</FooterBox__Desc>
                </FooterBox__TopMBox>
            </FooterBox__TopM>
            <FooterBox__TopBox>
                <FooterBox__Titile style={{ marginLeft: "50px" }}>COCOFARM</FooterBox__Titile>
                <FooterBox__Desc style={{ margin: "0px 50px 5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantiumLorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantiumLorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</FooterBox__Desc>
            </FooterBox__TopBox>
        </FooterBox__Top>
        <FooterBox__Bottom>
        <FooterBox__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</FooterBox__Desc>
        </FooterBox__Bottom>
    </FooterBox>;
}

export default Footer;