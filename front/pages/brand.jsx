import React, { useEffect, useState} from "react";
import styled from "styled-components";
import DescView from "../components/DescView";
import DescTitle from "../components/DescTitile";
import Fade from "react-reveal";
import { Button } from "antd";
import {useRouter} from "next/router";
import axios from "axios";

const Wrapper = styled.div`
    width: 100%;
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopImage = styled.img`
    width: 900px;
    height: 480px;

    border-radius: 8px;
    margin-bottom: 25px;

    transition: 0.5s;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    box-shadow: 3px 3px 7px #999;

    & :hover {
        opacity: 0.7;
        transform: scale(1.05);
    }
`;

const RelWrapper = styled.div`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    position: absolute;

    width: 220px;
    height: 330px;

    background: linear-gradient(45deg, #797979, #575757);

    right: 30px;
    bottom: -20px;

    border-radius: 2px;
    color: #fff;

    font-size: 17px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & :hover {
        background: #797979;
    }
`;

const BtnBox = styled.div`
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const CustomBtn = styled(Button)`
    width: 200px;
    height: 45px;

    font-size: 14px;

    background-color: #c1d7ae;

    border: #c1d7ae;

    & :hover {
        background-color: #ffcab1;
    }
`;

const Brand = () => {

    const getFram = async() => {
        const res = await axios.get("http://localhost:4000/api/test")
    };

    useEffect(() => {
        getFram();
    }, []);

    const rt = useRouter();

    const goContact = () => {
        rt.push("/contact");
    };

    return (
        <Wrapper>
            <Fade>
                <RelWrapper>
                    <TopImage src="https://i.pinimg.com/474x/72/cb/7b/72cb7b87f64c6f6819c2f2cedf09b17f.jpg"/>

                    <TextBox>
                        <div>건강한 식단과</div>
                        <div>신선한 식단</div>
                        <div>그리고 직접 재배한</div>
                        <div>최고의 농한물을</div>
                        <div>저렴한 가격에</div>
                    </TextBox>
                </RelWrapper>
            </Fade>    

            <div style={{ marginBottom: "300px" }}></div>

            <DescTitle />
            <DescView mode={1} 
                title="코코팜은"
                image="https://i.pinimg.com/474x/c4/ec/c0/c4ecc0c80aa0dce3ec267949535fe707.jpg"
                desc1="저희 코코팜은 쌀,콩,고추,옥수수,감자,오이,고구마,깨,배추,양배추,포도,수박, 등등을"
                desc2="무농약으로 재배하고 있습니다."
                desc3="앞으로도 고객 여러분들께 깨끗하고 신선한 농산물을 전달하겠습니다."
            />
            
            <DescTitle />
            <DescView mode={2} 
                title="코코팜의 환경은"
                image="https://i.pinimg.com/474x/c8/b8/95/c8b895ca679ea00116bb75f435cb54ec.jpg"
                desc1="농부의 노력으로 특허 받은 친환경 비료만을 사용하여"
                desc2="채소를 재배하고 있습니다."
                desc3="항상 최고를 드리겠다는 마인드로 하겠습니다."
            />

            <div style={{ marginBottom: "50px" }}>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus laudantium </article>
                <article> Quibusdam, earum. Vero sunt veritatis nostrum optio cumque dolor mollitia omnis,</article>
                <article>consequuntur aut eum. Odio fuga quidem nulla cumque at?</article>
            </div>

            <BtnBox>
                <CustomBtn onClick={() => goContact()} type="primary"> 
                    농산물 문의하기 
                </CustomBtn>
            </BtnBox>
        </Wrapper>
    );
}

export default Brand;