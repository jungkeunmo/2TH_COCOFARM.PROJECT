import React from "react";
import "antd/dist/antd.css"; 
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import styled from "styled-components";
import AdminMenu from "../components/AdminMenu";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

const ManuBox = styled.div`
  width: 210px;
  height: 100%;

  background-color: #444;
  color: #fff;

  padding: 10px 20px;

  box-shadow: 3px 3px 3px #999;

  overflow: scroll;
`;

const Box = styled.div`
  width: calc(100% - 210px);
  height: 100%;

  padding: 20px;
  overflow: scroll;
`;

const AppShell = ({ Component }) => {

  const router = useRouter();

  console.log(router.pathname.split("/")[1]);

  return (

    // admin 페이지에 들어갔을떄, header를 안나오게 하려면
    // 어떤 방식을 사용해야하는가?
    
    // {router.pathname.split("/")[1] === "admin" ? null : <Header />}, {router.pathname.split("/")[1] === "admin" ? null : <Footer />}
    <>
      <GlobalStyle/>

      {router.pathname.split("/")[1] === "admin" ? (
        <Wrapper>
          <ManuBox>
            <AdminMenu title="관리자 데시보드" url="/admin" />
            <AdminMenu title="브랜드 화면관리" url="/admin/brandAdmin"/>
            <AdminMenu title="문의 관리" url="/admin/contactAdmin" />
            <AdminMenu title="홈페이지로 돌아가기" url="/" />
          </ManuBox>

          <Box>
            <Component />
          </Box>
        </Wrapper>
       ) : (
        <>
          <Header />

          <Component />

          <Footer />
        </>
      )}
    </>
  );
};

export default AppShell;