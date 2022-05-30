import React, {useEffect, useState, useRef, useCallback} from "react";
import axios from "axios";
import styled from "styled-components";
import { Table, } from "antd";

const Wrapper = styled.section`
    width: 100%;
    height: ${(props) => props.height || "100%"};
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.al  || "center"};
    justify-content: ${(props) => props.ju  || "center"};

    margin-top: ${(props) => props.mt || 0}px;
`;

const MyTable = styled(Table)`
    width: 100%;
`;

const ContactAdmin = () => {
    const [boardList, setBoardList] = useState();
    const [selectId, SelectId] = useState("");

    useEffect(() => {
        getList();
    }, []);


    const getList = async() => {
        const result = await axios.get("http://localhost:4000/api/contact/list");

        setBoardList(result.data)
    }

    const columns = [
        {
            title : "No.",
            dataIndex : "id"
        },
        {
            title : "Name",
            render : (data) => <div onClick={() => titleClickHandler(data)}>{data.title}</div>, 
        },
        {
            title : "Price",
            dataIndex : "price"
        },
        {
            title : "CreatedAt",
            dataIndex : "formatCreatedAt"
        },
        {
            title : "mobile",
            dataIndex : "mobile"
        },
    ]

    return <div>
            <Wrapper mt="25">
                <MyTable rowKey="id" columns={columns} dataSource={boardList} size="small" />
            </Wrapper>
    </div>
}

export default ContactAdmin;