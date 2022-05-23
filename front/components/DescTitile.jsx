import React from "react";
import styled from "styled-components";
import { DatabaseOutlined } from "@ant-design/icons";

const Box = styled.div`
    margin-bottom: 10px;
    font-size: 34px;
    font-weight: 700;

    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    color: #484848;
    border-bottom: 3px solid #484848;
`;

const DescTitle = () => {
    return <Box>
            <DatabaseOutlined style={{ marginRight: "5px" }}/>
            TITLE
        </Box>
};

export default DescTitle;