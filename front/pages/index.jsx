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

    border-radius: 6px;

    box-shadow: 0.5px 0.5px 2px #9c9c9c;
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

    border-radius: 1px;
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

  background-color: #D3E4CD;
  padding: 0px 50px;

  border-radius: 6px;

  box-shadow: 0.5px 0.5px 4px #9c9c9c;
`;

const Wrapper2__top = styled.div`
  width: 100%;
  height: 60vh;

  border-bottom: 2px solid #000;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper2__title = styled.p`
    font-size: 22px;
    font-weight: bold;
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
  height: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Wrapper3__BoxText = styled.div`
  width: 100%;
  height: 300px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid #000;

  margin-bottom: 50px;
`;


const Wrapper3__Img = styled.img`
    width: 580px;
    height: 370px;

    margin: 20px;

    border-radius: 6px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    box-shadow: 0.5px 0.5px 4px #9c9c9c;
`;

const Wrapper3__Desc = styled.p`
    width: 33%;
    height: 100%;

    font-size: 16px;

    margin: 2px 20px;
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

  background-color: #FEF5ED;

  border-radius: 6px;

  padding: 0px 80px;

  box-shadow: 0.5px 0.5px 4px #9c9c9c;
`;

const Wrapper4__Top = styled.div`
    width: 100%;
    height: 90%;

    border-bottom: 2px solid #000;

    display: flex;
    flex-direction: row;
`;

const Wrapper4__L = styled.div`
  width: 40%;
  height: 100%;

  background-color: #FEF5ED;

  border-radius: 6px;

  padding: 0px 130px;

  box-shadow: 0.5px 0.5px 4px #9c9c9c;
`;

const Wrapper4__M = styled.div`
  width: 40%;
  height: 100%;

  background-color: #FEF5ED;

  border-radius: 6px;

  padding: 0px 130px;

  box-shadow: 0.5px 0.5px 4px #9c9c9c;
`;

const Wrapper4__R = styled.div`
  width: 60%;
  height: 100%;

  background-color: #FEF5ED;

  border-radius: 6px;

  padding: 0px 130px;

  box-shadow: 0.5px 0.5px 4px #9c9c9c;
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

    background-image: url("https://t4.ftcdn.net/jpg/03/26/65/57/240_F_326655732_pX1N41kCv3XiyIqTEk0KzboBJrAAi5hO.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Wrapper6__img = styled.img`
  width: 230px;
  height: 230px;

  border-radius: 6px;

  box-shadow: 0.5px 0.5px 4px #9c9c9c;
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
                <Wrapper2__Box>
                    <Wrapper2__top>
                        <Wrapper2__title>COCOFARM QUESTION</Wrapper2__title>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                        <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                    </Wrapper2__top>
                </Wrapper2__Box>
            </Wrapper2>
            <Wrapper3>
                <Wrapper2__title>COCOFARM QUESTION</Wrapper2__title> 
                <Wrapper1__Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium</Wrapper1__Desc>
                <Wrapper3__Box1>
                    <Wrapper3__Img src="https://i.pinimg.com/236x/a7/7a/23/a77a234cb2da77ffcc0bae21c5873b13.jpg"></Wrapper3__Img>
                    <Wrapper3__Img src="https://i.pinimg.com/236x/45/c0/c9/45c0c98b51b47eb841e5bb94636678c4.jpg"></Wrapper3__Img>
                    <Wrapper3__Img src="https://i.pinimg.com/236x/c5/6f/3e/c56f3e5c8b0de41a0f4e45a372f51582.jpg"></Wrapper3__Img>
                </Wrapper3__Box1>

                <Wrapper3__BoxText>
                    <Wrapper3__Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium
                    </Wrapper3__Desc>
                    <Wrapper3__Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium
                    </Wrapper3__Desc>
                    <Wrapper3__Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium
                    </Wrapper3__Desc>
                </Wrapper3__BoxText>  

                <Wrapper2__title>WELCOME TO COCO FARM COCO FARM IS A PLACE THAT</Wrapper2__title>
                <Wrapper1__button>공지사항</Wrapper1__button>
            </Wrapper3>
            <Wrapper4>
                <Wrapper4__Box>
                    <Wrapper4__Top></Wrapper4__Top>
                </Wrapper4__Box>
            </Wrapper4>
            <Wrapper5></Wrapper5>
            <Wrapper6>
                <Wrapper6__img src="https://i.pinimg.com/236x/73/e8/f5/73e8f53c73abf6288bb22ebe164d23ac.jpg"></Wrapper6__img>
                <Wrapper6__img src="https://i.pinimg.com/236x/11/37/95/113795baf4684354ce3187d30815b630.jpg"></Wrapper6__img>
                <Wrapper6__img src="https://i.pinimg.com/236x/1d/29/62/1d2962ffa7a1cb100eac70c575759873.jpg"></Wrapper6__img>
                <Wrapper6__img src="https://i.pinimg.com/236x/97/2c/3d/972c3d5723ee4c90d98ffcae2235901f.jpg"></Wrapper6__img>
                <Wrapper6__img src="https://i.pinimg.com/236x/50/22/99/502299b2422423962aedda73d1e597cc.jpg"></Wrapper6__img>
                <Wrapper6__img src="https://i.pinimg.com/236x/ba/e1/e1/bae1e1aa5faf48701617ba58419d8be0.jpg"></Wrapper6__img>
            </Wrapper6>
        </Body>
    );
}

export default MyWeb;