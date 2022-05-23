import React from "react";
import "antd/dist/antd.css"; 
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";
import Footer from "../components/Footer";

const AppShell = ({ Component }) => {
  return (

    // admin 페이지에 들어갔을떄, header를 안나오게 하려면
    // 어떤 방식을 사용해야하는가?
    
    <>
      <GlobalStyle/>
      <Header />

      <Component />

      <Footer/>
    </>
  );
};

export default AppShell;