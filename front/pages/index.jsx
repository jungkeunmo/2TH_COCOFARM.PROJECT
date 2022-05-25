import React from "react";
import styled from "styled-components";
import {} from "antd";

const Body = styled.div`
    width: 100%;
    height: 450vh;

    display: flex;
    flex-direction: column;
`;

const Wrapper1 = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #2b73b2;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0px 130px;
`;

const Wrapper1__Box1 = styled.div`
    width: 50%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrapper1__lien = styled.div`
    width: 10px;
    height: 400px;

    background-color: #000;
`;

const Wrapper1__Box2 = styled.div`
    width: 50%;
    height: 100vh;
`;

const Wrapper1__Img = styled.img`
    width: 60%;
    height: 60%;
    background-image: url("https://i.pinimg.com/236x/54/9d/84/549d84958cd3624449f477e0632f936a.jpg");
    background-color: aqua;
`;

const Wrapper1__Text = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #7d868e;
`;

const Wrapper1__Titile = styled.p`
    font-size: 20px;
    margin: 0;
`;

const Wrapper1__Desc = styled.p`
    font-size: 20px;
    margin: 0;
`;

const Wrapper1__button = styled.button`
   font-size: 20px;
`;

/* */
const Wrapper2 = styled.div`
    width: 100%;
    height: 95vh;
    background-color: #41627f;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Wrapper2__Box = styled.div`
  width: 80%;
  height: 80%;
  background-color: #090b0d;
`;

const Wrapper3 = styled.div`
  width: 100%;
  height: 105vh;
  background-color: #226cac;
`;

const Wrapper4 = styled.div`
  width: 100%;
  height: 95vh;
  background-color: #101820;
`;

const Wrapper5 = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #134673;
`;

const MyWeb = () => {
    return (
        <Body>
            <Wrapper1>
                <Wrapper1__Box1>
                    <Wrapper1__Img></Wrapper1__Img>
                </Wrapper1__Box1>  
                    <Wrapper1__lien></Wrapper1__lien>
                <Wrapper1__Box2> 
                    <Wrapper1__Text>
                        <Wrapper1__Titile>COCOFARM</Wrapper1__Titile>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__button>공지사항</Wrapper1__button>
                    </Wrapper1__Text>
                </Wrapper1__Box2>    
            </Wrapper1>
            <Wrapper2>
                <Wrapper2__Box></Wrapper2__Box>
            </Wrapper2>
            <Wrapper3></Wrapper3>
            <Wrapper4></Wrapper4>
            <Wrapper5></Wrapper5>
        </Body>
    );
}

export default MyWeb;