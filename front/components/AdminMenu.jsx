import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

const MenuItem = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 0.5px solid #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 5px;

    padding: 5px;

    cursor: pointer;

    transition: 0.5s;

    &:hover {
        background-color: #999;
        border-radius: 10px;
    }
`;

const AdminMenu = ({title, url}) => {
    const router = useRouter();
    const moveHandler = (sendURL) => {
        router.push(sendURL)
    }
    return <MenuItem onClick={() => moveHandler(url)}>{title}</MenuItem >
};

export default AdminMenu;