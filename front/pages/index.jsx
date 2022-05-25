import React from "react";
import styled from "styled-components";
import {} from "antd";

const Body = styled.div`
    width: 100%;
    height: 515vh;

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

    padding: 0px 130px;
`;

const Wrapper2__Box = styled.div`
  width: 60%;
  height: 70%;
  background-color: #090b0d;
`;

const Wrapper3 = styled.div`
  width: 100%;
  height: 150vh;
  background-color: #226cac;

  padding: 0px 130px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper3__Box1 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #525f6b;

  padding: 0px 130px;

  display: flex;
  flex-direction: row;
`;

const Wrapper3__BoxText = styled.div`
  width: 100%;
  height: 300px;
  background-color: #333d46;

  padding: 0px 130px;

  display: flex;
  flex-direction: row;

  border-bottom: 10px solid #000;
`;


const Wrapper3__Img = styled.img`
  width: 450px;
  height: 350px;

  background-color: #486075;

  margin: 20px;
`;

const Wrapper4 = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #101820;

  padding: 0px 130px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Wrapper4__Box = styled.div`
  width: 80%;
  height: 75%;
  
  background-color: #3b5a7a;

  padding: 0px 130px;
`;

const Wrapper5 = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #134673;

  padding: 0px 130px;
`;

const Wrapper6 = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #3a75a8;

  padding: 0px 130px;

  display: flex;
  flex-direction: row;
`;

const Wrapper6__img = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #3a75a8;
  padding: 0px 130px;
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
            <Wrapper3>
                <Wrapper1__Titile>COCOFARM</Wrapper1__Titile>  
                <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>

                <Wrapper3__Box1>
                    <Wrapper3__Img></Wrapper3__Img>
                    <Wrapper3__Img></Wrapper3__Img>
                    <Wrapper3__Img></Wrapper3__Img>
                </Wrapper3__Box1>

                <Wrapper3__BoxText>
                    <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                    <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                    <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                </Wrapper3__BoxText>  

                <Wrapper1__Titile style={{ borderButton: "1pxsoild#000" }}>COCOFARM</Wrapper1__Titile>  
                <Wrapper1__button>공지사항</Wrapper1__button>
            </Wrapper3>
            <Wrapper4>
                <Wrapper4__Box></Wrapper4__Box>
            </Wrapper4>
            <Wrapper5></Wrapper5>
            <Wrapper6>
            </Wrapper6>
        </Body>
    );
}

export default MyWeb;