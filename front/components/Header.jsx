import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Box = styled.header`
    width: 100%;
    height: 120px;
    color: #000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("https://i.pinimg.com/474x/ce/7e/59/ce7e597236d70c8f1e23a9f724e9f64b.jpg");
`;

const TopBox = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const BottomBox = styled.div`
    width: 90%;
    height: 50%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TitleLink = styled.a`
    color: #000;

    margin: 0px 40px;

    font-size: 19px;
    font-weight: bold;

    transition: 0.5s;

    padding: 3px;

    & :hover {
        color: #e8e8a6;
    }
`;

const CustomLink = styled.a`
    color: #000;

    margin: 0px 40px;

    font-size: 15px;

    transition: 0.5s;

    padding: 3px;

    & :hover {
        color: #e8e8a6;
    }
`;

const Header = () => {
    return (
        <Box>
            <TopBox>
                <Link href="/">
                    <TitleLink>COCOFARM</TitleLink>
                </Link>
            </TopBox>

            <BottomBox>
                <Link href="/brand">
                    <CustomLink>브랜드</CustomLink>
                </Link>

                <Link href="/contact"> 
                    <CustomLink>문의 및 상담</CustomLink>
                </Link>

                <Link href="/review"> 
                    <CustomLink>이용후기</CustomLink>
                </Link>
            </BottomBox>
        </Box>
    )
}

export default Header;