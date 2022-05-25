import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    width: 100%;
    height: 600px;
    
    padding: 50px 50px;

    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("https://t3.ftcdn.net/jpg/03/14/25/72/240_F_314257207_3dGZWacHzEdGDO04ru3lXhJtTfoe2Pgv.jpg");
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