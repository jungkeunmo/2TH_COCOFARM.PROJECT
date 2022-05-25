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

    background-color: #D3E4CD;

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
    width: 2px;
    height: 420px;

    background-color: #999B84;
`;

const Wrapper1__Box2 = styled.div`
    width: 50%;
    height: 100vh;
`;

const Wrapper1__Img = styled.img`
    width: 69%;
    height: 69%;

    background-image: url("https://i.pinimg.com/474x/b6/cc/ea/b6cceacde2796477ed8851dec58ad9dc.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    border-radius: 5px;
`;

const Wrapper1__Text = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Wrapper1__Titile = styled.p`
    font-size: 22px;
    font-weight: bold;

    margin: 10px 150px 50px 50px;
`;

const Wrapper1__Day = styled.p`
    font-size: 15px;
    font-weight: 900;

    color: #1c251e;

    margin: 5px 50px 5px;
`;

const Wrapper1__Desc = styled.p`
    font-size: 16px;

    margin: 2px 50px;
`;

const Wrapper1__button = styled.button`
    width: 150px;
    height: 30px;

    background-color: #99A799;
    color: #fff;

    font-size: 15px;

    margin: 30px 50px 10px;
    border: none;
`;

/* */
const Wrapper2 = styled.div`
    width: 100%;
    height: 95vh;

    background-color: #FEF5ED;

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

  background-color: #EFD9D1;

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

  background-color: #99A799;

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

  background-color: #DDB7AB;

  padding: 0px 130px;
`;

const Wrapper6 = styled.div`
    width: 100%;
    height: 55vh;

    background-color: #FEF5ED;

    padding: 0px 130px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Wrapper6__img = styled.img`
  width: 230px;
  height: 230px;

  background-color: #54738d;
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
                    <Wrapper1__Day>2022/05/25</Wrapper1__Day>
                        <Wrapper1__Titile style={{ color: "#414e43" }}>WELCOME TO COCO FARM COCO FARM IS A PLACE THAT SELLS AGRICULTURAL PRODUCTS</Wrapper1__Titile>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__button>리뷰 보러가기</Wrapper1__button>
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

                <Wrapper1__Titile>COCOFARM</Wrapper1__Titile>  
                <Wrapper1__button>공지사항</Wrapper1__button>
            </Wrapper3>
            <Wrapper4>
                <Wrapper4__Box></Wrapper4__Box>
            </Wrapper4>
            <Wrapper5></Wrapper5>
            <Wrapper6>
                <Wrapper6__img></Wrapper6__img>
                <Wrapper6__img></Wrapper6__img>
                <Wrapper6__img></Wrapper6__img>
                <Wrapper6__img></Wrapper6__img>
                <Wrapper6__img></Wrapper6__img>
                <Wrapper6__img></Wrapper6__img>
            </Wrapper6>
        </Body>
    );
}

export default MyWeb;