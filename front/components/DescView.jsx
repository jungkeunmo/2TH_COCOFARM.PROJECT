import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

const Wrapper = styled.div`
    width: 80%;
    height: 300px;

    display: flex;
    flex-direction: ${(props) => props.mode ===1 ? "row" : "row-reverse"};

    margin-bottom: 300px;
`;

const ImageSection = styled.img`
    width: 650px;
    height: 350px;

    border-radius: 5px;
    box-shadow: 3px 3px 7px #999;

    transition: 0.5s;

    &:hover {
        filter: blur(3px);
    }
`;

const TextSection = styled.div`
    width: calc(100% - 600px);
    height: 300px;

    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 18px;
`;

const Texttitle = styled.p`
    font-size: 20px;
    font-weight: bold;

    padding: 30px;
`;

const TextContent = styled.div``;

const DescView = ({mode, image, title, desc1, desc2, desc3}) => {
    return (
        <Wrapper mode={mode}>
            <ImageSection src={image}/>

            <TextSection>
                <Fade delay={0}>   
                    <Texttitle>{title}</Texttitle>
                </Fade>
                <Fade delay={300}>
                <   TextContent>{desc1}</TextContent>
                </Fade>
                <Fade delay={600}>
                    <TextContent>{desc2}</TextContent>
                </Fade>
                <Fade delay={900}>
                    <TextContent>{desc3}</TextContent>
                </Fade>
            </TextSection>
        </Wrapper>
    )
};

export default DescView;