import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumb, Col, List, Row } from "antd";
import { Post } from "../../components";

import TopicsSide from "../../components/TopicsSide";

const Home = () => {
  const postsPerPage = 5;

  const getPosts = useSelector((state) => state.posts);

  // sort by votes
  let postsByVotes = getPosts.sort(
    (a, b) => parseFloat(b.votes) - parseFloat(a.votes)
  );

  // Sort by timestamp
  // let postsByDate = getPosts.sort(
  //   (a, b) => parseFloat(b.date) - parseFloat(a.date)
  // );

  return (
    <div>
      <Breadcrumb className="breadCrumb">
        <Breadcrumb.Item>
          {getPosts.length > postsPerPage ? (
            <>
              Showing {postsPerPage} of {getPosts.length} topics
            </>
          ) : (
            <>Showing {getPosts.length} topics</>
          )}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
        <Col xs={0} sm={6} md={6} lg={6} xl={6}>
          <TopicsSide />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
