import "./App.css";
import { useState } from "react";
import NavBar from "./components/basicLayout/navBar";
import { Breadcrumb, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import AppRoutes from "./Common/AppRoutes";
import { Container, Typography } from "@material-ui/core";
import NavBar2 from "./components/basicLayout/navBar2";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        <NavBar2>
          <Layout
            className="site-layout"
            style={{ margin: "0px 0px", padding: "0px 0px" }}
          >
            <Content style={{ margin: "0px 0px", padding: "0px 0px" }}>
              <AppRoutes></AppRoutes>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </NavBar2>
      </Layout>
    </Provider>
  );
}

export default App;
