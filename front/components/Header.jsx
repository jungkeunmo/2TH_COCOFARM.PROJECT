import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Box = styled.header`
    width: 100%;
    height: 120px;
    background: linear-gradient(45deg,#c1d7ae, #8cc084);
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 2px 2px 8px #999;
`;

const TopBox = styled.div`
    width: 100%;
    height: 50%;
    border-bottom: 0.3px solid #fff;

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
    color: #fff;

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
    color: #fff;

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