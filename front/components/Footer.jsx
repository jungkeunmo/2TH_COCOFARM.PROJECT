import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    width: 100%;
    height: 600px;
    
    padding: 50px 50px;

    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("https://t3.ftcdn.net/jpg/03/36/61/38/240_F_336613870_0QzialbGfpejHED59twze09nPmjFhANY.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;

    color: #fff;
`;

const Footer = () => {
    return <FooterBox>Footer</FooterBox>;
}

export default Footer;