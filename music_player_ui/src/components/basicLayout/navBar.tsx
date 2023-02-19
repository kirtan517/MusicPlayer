import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import { useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;


const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentActiveKey, setCurrentActiveKey] = useState<string>('home');
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items: MenuItem[] = [
    getItem(
      <div onClick={() => navigate("/")}>Home</div>,
      "home",
      <HomeOutlined />
    ),
    getItem(
      <div onClick={() => navigate("/favourites")}>Favourites</div>,
      "favourites",
      <DesktopOutlined />),
    getItem("Option 3", "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value: any) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <div>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onSelect={({ key }) => setCurrentActiveKey(key)}
          defaultActiveFirst={true}
          selectedKeys={[currentActiveKey]}
        />
      </div>
    </Sider>
  );
};

export default NavBar;
