import React, { useCallback, useEffect, useState } from "react";
import "antd/dist/antd.css"; 
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import styled from "styled-components";
import AdminMenu from "../components/AdminMenu";
import {Button, Input, message} from "antd";
import {Cookies, CookiesProvider, useCookies} from "react-cookie";


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

const Whole = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Bar = styled.div`
  width: 100%;
  height: 40px;

  background-color: #013;
`;

const ADMIN_CODE = "VX001POPL542ZX";

const AppShell = ({ Component }) => {
  const [cookie, setCookie] = useCookies(["adminToken"]);

  const [adminFlag, setAdminFlag] = useState(false);
  const [codeV, setCodeV] = useState("");

  const cookieSave = (value) => {
    setCookie("adminToken", value, {path: "/"});
  };

  const codeChangeHandler = useCallback(
    (e) => {
      setCodeV(e.target.value)
    }, 
    [codeV]
  );

  const router = useRouter();

  const adminLoginAction = useCallback(() => {
    if(ADMIN_CODE === codeV) {
      cookieSave("VX001POPL542ZX");

      message.success("관리자 접속 코드를 통해 관리자 패널에 진입하였습니다.")
      setAdminFlag(true)
    } else {
      message.error("관리자 접속 코드가 올바르지 않습니다.");
      setCodeV();
    };
  }, [adminFlag, codeV]);

  useEffect(() => {
    if(router.pathname.split("/")[1] === "admin") {

    if(cookie["adminToken"] === ADMIN_CODE) {
      setAdminFlag(true);
      message.info("관리자 토큰을 통해 관리자 접근권한이 허용되었습니다.")
    }
  }
  }, [])

  return (

    // admin 페이지에 들어갔을떄, header를 안나오게 하려면
    // 어떤 방식을 사용해야하는가?
    
    // {router.pathname.split("/")[1] === "admin" ? null : <Header />}, {router.pathname.split("/")[1] === "admin" ? null : <Footer />}
    <>
      <CookiesProvider>
      <GlobalStyle/>

      {router.pathname.split("/")[1] === "admin" ? (
        <Wrapper>

          {adminFlag === true ? (
            <>
              <ManuBox>
                <AdminMenu title="관리자 데시보드" url="/admin" />
                <AdminMenu title="브랜드 화면관리" url="/admin/brandAdmin"/>
                <AdminMenu title="문의 관리" url="/admin/contactAdmin" />
                <AdminMenu title="홈페이지로 돌아가기" url="/" />
              </ManuBox>

              <Box>
                <Component />
              </Box>
            </>
          ) : (
            <Whole>
              <Bar></Bar>

              <div style={{ display: "flex", flexDirection: "row"}}>
                <Input 
                  style={{ width: "300px", height: "32px"}}
                  placeholder="관리자 접속 코드를 입력하세요."
                  value={codeV}
                  onChange={codeChangeHandler}
                />
                <Button type="primary" onClick={() => adminLoginAction()}>
                  코드입력
                </Button>
              </div>

              <Bar></Bar>
            </Whole>
          )}
        </Wrapper>
       ) : (
        <>
          <Header />

          <Component />

          <Footer />
        </>
      )}
      </CookiesProvider>
    </>
  );
};

export default AppShell;