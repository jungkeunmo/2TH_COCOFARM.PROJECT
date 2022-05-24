import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    width: 100%;
    height: 500px;
    
    padding: 50px 50px;

    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url("https://i.pinimg.com/474x/ce/7e/59/ce7e597236d70c8f1e23a9f724e9f64b.jpg");
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