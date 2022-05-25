import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Icon = styled.div`
    width: 50px;
    height: 50px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("https://i.ibb.co/dM0yzt4/0661c2b408901b4f0a518787ca2aa58b-removebg-preview.png");
`;

const SininButton = styled.button`
    width: 100px;
    height: 30px;

    background-color: #99A799;
    color: #fff;

    font-size: 15px;
    border: none;

    border-radius: 5px;
`;

const Box = styled.header`
    width: 100%;
    height: 120px;

    top: 0;
    color: #000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: #D3E4CD;

    box-shadow: 2px 2px 8px #999;

    border-bottom: 1px solid #000;
`;

const TopBox = styled.div`
    width: 80%;
    height: 50%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    border-bottom: 1px solid #999;
`;

const TopBox__L = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TopBox__M = styled.div`
    width: 20%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
`;

const TopBox__R = styled.div`
    width: 40%;
    height: 50%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const BottomBox = styled.div`
    width: 80%;
    height: 50%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TitleLink = styled.a`
    color: #000;

    margin: 0px 5px;

    font-size: 20px;
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

    font-size: 14px;
    font-weight: bold;

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
                <TopBox__L></TopBox__L>
                <TopBox__M>
                    <Icon></Icon>
                    <Link href="/">
                        <TitleLink>COCOFARM</TitleLink>
                    </Link>
                </TopBox__M>
                <TopBox__R>
                    <SininButton>
                        로그인
                    </SininButton>
                </TopBox__R>
            </TopBox>

            <BottomBox>
                <Link href="/brand">
                    <CustomLink>주문</CustomLink>
                </Link>

                <Link href="/contact"> 
                    <CustomLink>문의 및 상담</CustomLink>
                </Link>

                <Link href="/review"> 
                    <CustomLink>이용후기</CustomLink>
                </Link>

                <Link href="/brand">
                    <CustomLink>공지사항</CustomLink>
                </Link>

                <Link href="/brand">
                    <CustomLink>Qna</CustomLink>
                </Link>
            </BottomBox>
        </Box>
    )
}

export default Header;