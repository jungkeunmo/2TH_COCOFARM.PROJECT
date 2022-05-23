import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
    width: 100%;
    height: 400px;

    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("https://i.pinimg.com/474x/e0/87/c6/e087c61ad0682c9fa4c8a9d1ba7d6834.jpg");
    color: #fff;

    background-size: cover;
    background-attachment: fixed;
`;

const Footer = () => {
    return <FooterBox>Footer</FooterBox>;
}

export default Footer;