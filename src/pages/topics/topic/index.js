import React from "react"; // { useState }
import { useSelector } from "react-redux";
import {
  Breadcrumb,
  // Button,
  Card,
  Col,
  List,
  Row,
} from "antd";
import { Post } from "../../../components";
import { useParams } from "react-router-dom";
import { topics } from "../../../constants/topics";

const Topic = () => {
  const { id } = useParams();
  const postsPerPage = 5;
  let getFave = [];
  let desc = "";

  const getPosts = useSelector((state) => state.posts);

  getPosts.map((post) => {
    if (post.topic === id) {
      getFave.push(post);
    }
    return null;
  });

  topics.map((val) => {
    if (val.value === id) {
      desc = val.desc;
    }
    return null;
  });

  // sort by votes
  let postsByVotes = getFave.sort(
    (a, b) => parseFloat(b.votes) - parseFloat(a.votes)
  );
  return (
    <div>
      <Breadcrumb className="breadCrumb">
        <Breadcrumb.Item>
          {getFave.length > postsPerPage ? (
            <>
              Showing {postsPerPage} of {getFave.length} posts
            </>
          ) : (
            <>Showing {getFave.length} posts</>
          )}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="topicsLIst">
        <Col xs={24} sm={18} md={18} lg={18} xl={18}>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              pageSize: postsPerPage,
            }}
            dataSource={postsByVotes}
            renderItem={(item) => <Post data={item} key={item.id} />}
          />
        </Col>
        <Col xs={24} sm={6} md={6} lg={6} xl={6}>
          <Card title={`r/${id}`} className="sideCard">
            <p>{desc}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Topic;
