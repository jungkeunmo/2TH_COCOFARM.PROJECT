import React, {useEffect, useState, useRef, useCallback} from "react";
import axios from "axios";
import styled from "styled-components";
import { Table, Button, message, Modal } from "antd";

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

const _Name = styled.div `
    margin: 10px 0px 30px 0px;
    font-size: 18px;
    padding: 0px 3px;

    border-bottom: 4px solid #637465;
    color: #131413;
`;

const _Price = styled.div `
    margin: 5px 0px 5px 0px;
    font-size: 14px;
    color: #333;
`;

const _Mobile = styled.div `
    margin: 5px 0px 5px 0px;
    font-size: 14px;
    color: #333;
`;

const _CreatedAt = styled.div `
    margin: 5px 0px 5px 0px;
    font-size: 14px;
    color: #333;
`;

const _Content = styled.div `
    width: 100%;
    height: 50vh;
    border-radius: 7px;
    box-shadow: 0px 0px 5px #d7d7d7;
    margin-top: 20px;
    overflow: scroll;
`;

const ContactAdmin = () => {
    // 기본값은 0으로 하되,
    // 0은 전체 
    // 1은 처리 전
    // 2는 처리 완료를 의미한다.

    const [selectType, setSelectType] = useState(0);
    const [list, setList] = useState();

    const [detailModal, setDetailModal] = useState(false);
    const [dName, setDName] = useState("");
    const [dPrice, setDPrice] = useState("");
    const [dMobile, setDMobile] = useState("");
    const [dCreatedAt, setDCreatedAt] = useState("");
    const [dContent, setDContent] = useState("");

    const selectTypeHandler = useCallback((value) => {
        setSelectType(value);
    }, [selectType]);

    const getData = async() => {
        const result = await axios.post("http://localhost:4000/api/contact/list", {
            selectType: selectType || 0,
        });

        setList(result.data);
    };

    const doCompletedHandler = useCallback(async (id) => {
        const result = await axios.post("http://localhost:4000/api/contact/com", {
            id,
        });

        if (result.data.result) {
            message.success("해당 문의가 처리되었습니다.")
            getData();
        }
    }, []); 

    const detailModalToggle = () => {
        setDetailModal((prev) => !prev);
    };

    const contactClickHandler = (data) => {    
        setDName(data.name);
        setDPrice(data.viewPrice);
        setDMobile(data.mobile);
        setDCreatedAt(data.viewCreatedAt);
        setDContent(data.content);

        detailModalToggle(); 
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [selectType]);

    const columns = [
        {
            title : "No.",
            dataIndex : "id"
        },
        {
            title : "Name",
            dataIndex : "name"
        },
        {
            title : "Price",
            dataIndex : "viewPrice"
        },
        {
            title : "CreatedAt",
            dataIndex : "viewCreatedAt"
        },
        {
            title : "문의내용",
            render : (data) => (<Button type="primary" size="small" onClick={() => contactClickHandler(data)}>확인</Button>)
        },
        {
            title : "Mobile",
            dataIndex : "mobile"
        },
        {
            title : "처리현황",
            render : (data) => data.isCompleted ? ("-") : (<Button type="primary" size="small" onClick={() => doCompletedHandler(data.id)}>처리</Button>)
        },
        {
            title : "처리일",
            render : (data) => (data.isCompleted ? data.viewCompletdAt : "-")
        }
    ]


    return <div>
            <Button onClick={() => selectTypeHandler (0)} type={selectType === 0 ? "primary" : "default"} size="small">전체</Button>
            <Button onClick={() => selectTypeHandler (1)} type={selectType === 1 ? "primary" : "default"} size="small">처리 전</Button>
            <Button onClick={() => selectTypeHandler (2)} type={selectType === 2 ? "primary" : "default"} size="small">처리 완료</Button>
            <Wrapper mt="25">
                <MyTable rowKey="id" columns={columns} dataSource={list ? list : []} size="small" />
            </Wrapper>

            <Modal footer={null} visible={detailModal} onCancel={() => detailModalToggle()} title="문의 관리 상세보기" width="60%">
                <_Name>{dName}</_Name>
                <_Price>{dPrice}</_Price>
                <_Mobile>{dMobile}</_Mobile>
                <_CreatedAt>{dCreatedAt}</_CreatedAt>
                <_Content>{dContent}</_Content>
            </Modal>
    </div>
}

export default ContactAdmin;