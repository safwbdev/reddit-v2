import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { RedditOutlined, BulbFilled, PlusOutlined,HeartFilled } from "@ant-design/icons";
import { NAVBAR_ADD, NAVBAR_TITLE, NAVBAR_FAV, NAVBAR_TOPICS } from "../constants/lang";
import { URL_ROOT, URL_R, URL_FAVE, URL_ADD } from "../constants/routes";

const Navbar = () => {
  return (
    <Layout.Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key={0}>
          <Link to={URL_ROOT}>
            <RedditOutlined /> {NAVBAR_TITLE}
          </Link>
        </Menu.Item>
        <Menu.Item key={1}>
          <Link to={URL_R}><BulbFilled /> {NAVBAR_TOPICS}</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to={URL_FAVE}><HeartFilled /> {NAVBAR_FAV}</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to={URL_ADD}><PlusOutlined /> {NAVBAR_ADD}</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Navbar;
