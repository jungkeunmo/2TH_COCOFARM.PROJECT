import React from "react";
import styled from "styled-components";
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, YoutubeOutlined, MailOutlined  } from "@ant-design/icons";

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
    height: 30%;
    margin: 0px 10px;

    font-size: 38px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 10px 10px;
`;

const FooterBox__InstagramOutlined = styled(InstagramOutlined)`
    width: 70px;
    height: 70px;
   
    border: 3px solid #fff;
    color: #000;
    background: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   border-radius: 100%;
`;

const FooterBox__FacebookOutlined = styled(FacebookOutlined)`
    width: 70px;
    height: 70px;
   
    border: 3px solid #fff;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   border-radius: 100%;
`;

const FooterBox__TwitterOutlined = styled(TwitterOutlined)`
    width: 70px;
    height: 70px;
   
    border: 3px solid #fff;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   border-radius: 100%;
`;

const FooterBox__YoutubeOutlined = styled(YoutubeOutlined)`
    width: 70px;
    height: 70px;
   
    border: 3px solid #fff;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   border-radius: 100%;
`;

const FooterBox__MailOutlined = styled(MailOutlined)`
    width: 70px;
    height: 70px;
   
    border: 3px solid #fff;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   border-radius: 100%;
`;

const FooterBox__TopBoxT = styled.div`
    width: 100%;
    height: 30%;
    margin: 40px 10px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
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

const FooterBoxTop__Desc = styled.p`
    font-size: 16px;
    color: #292a28;
    font-weight: bold;
    text-shadow: 1px 1px 3px#999;
`;

const FooterBox__logo = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #fff;

    margin: 0;
`;


const Footer = () => {
    return <FooterBox>
        <FooterBox__Top>
            <FooterBox__TopBox>
                <FooterBox__TopBoxT>
                    <FooterBox__logo>COCOFARM</FooterBox__logo>
                    <FooterBoxTop__Desc>Lorem ipsum dolor</FooterBoxTop__Desc>
                </FooterBox__TopBoxT>
                <FooterBox__TopBoxicon>
                    <FooterBox__InstagramOutlined />
                    <FooterBox__FacebookOutlined />
                    <FooterBox__TwitterOutlined />
                    <FooterBox__YoutubeOutlined />
                    <FooterBox__MailOutlined />
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