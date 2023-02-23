import "./App.css";
import { useState } from "react";
import NavBar from "./components/basicLayout/navBar";
import { Breadcrumb, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import AppRoutes from "./Common/AppRoutes";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavBar />
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            // background: colorBgContainer
          }}
        />
        <Content
          style={{ margin: "0px 0px", padding: "0px 0px", height: "100%" , width : "100%", background:"pink"}}
        >
            <AppRoutes></AppRoutes>

          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              // background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div> */}
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;
