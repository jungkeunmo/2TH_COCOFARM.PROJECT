import React from "react";
import styled from "styled-components";
import {} from "antd";

const Body = styled.body`
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
`;

const Wrapper1__Box1 = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #17334b;
`;

const Wrapper1__Box2 = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: #17334b;

  display: flex;
  flex-direction: row;
`;

const Wrapper1__Img = styled.img`
  width: 100%;
  height: 100vh;
  background-color: #152a3d;
`;

const Wrapper1__Text = styled.text`
  width: 100%;
  height: 100vh;
  background-color: #5c666f;
`;

const Wrapper2 = styled.div`
  width: 100%;
  height: 95vh;
  background-color: #41627f;
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
                <Wrapper1__Box>
                    <Wrapper1__Img></Wrapper1__Img>
                    <Wrapper1__Text></Wrapper1__Text>
                </Wrapper1__Box>
            </Wrapper1>
            <Wrapper2></Wrapper2>
            <Wrapper3></Wrapper3>
            <Wrapper4></Wrapper4>
            <Wrapper5></Wrapper5>
        </Body>
    );
}

export default MyWeb;