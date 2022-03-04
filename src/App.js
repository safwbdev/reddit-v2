import React from "react";
import "./App.css";
import { Layout } from "antd";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Add, Edit, PostPage, Topic, Topics, Favorites } from "./pages";
import { FOOTER_TEXT } from "./constants/lang";
import {
  URL_ADD,
  URL_EDIT,
  URL_FAVE,
  URL_POST,
  URL_R,
  URL_RID,
  URL_ROOT,
  URL_USER,
} from "./constants/routes";

const { Content, Footer } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout className="layout">
          <Navbar />
          <Content className="contentArea">
            <Routes>
              <Route path={URL_ROOT} exact element={<Home />} />
              <Route path={URL_ADD} element={<Add />} />
              <Route path={URL_FAVE} element={<Favorites />} />
              <Route path={URL_R} exact element={<Topics />} />
              <Route path={URL_RID} exact element={<Topic />} />
              <Route path={URL_USER} element={<Favorites />} />
              <Route path={URL_EDIT} element={<Edit />} />
              <Route path={URL_POST} element={<PostPage />} />
            </Routes>
          </Content>
          <Footer>&copy; {FOOTER_TEXT}</Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
