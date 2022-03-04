import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumb, Col, List, Row } from "antd";
import { Post } from "../../components";
import TopicsSide from "../../components/TopicsSide";

const Favorites = () => {
  const postsPerPage = 5;

  let allFaves = [];
  const getPosts = useSelector((state) => state.posts);
  const getFaves = useSelector((state) => state.favorites);

  // sort by votes
  let postsByVotes = getFaves.sort(
    (a, b) => parseFloat(b.votes) - parseFloat(a.votes)
  );

  for (let a = 0; a < getPosts.length; a++) {
    for (let b = 0; b < getFaves.length; b++) {
      if (getPosts[a].id === getFaves[b]) {
        allFaves.push(getPosts[a]);
      }
    }
  }

  return (
    <div>
      <Breadcrumb className="breadCrumb">
        <Breadcrumb.Item>
          {postsByVotes.length > postsPerPage ? (
            <>
              Showing {postsPerPage} of {postsByVotes.length} favorited posts
            </>
          ) : (
            <>Showing {postsByVotes.length} favorited posts</>
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
            dataSource={allFaves}
            renderItem={(item) => <Post data={item} key={item.id} />}
          />
        </Col>
        <Col xs={24} sm={6} md={6} lg={6} xl={6}>
          <TopicsSide />
        </Col>
      </Row>
    </div>
  );
};

export default Favorites;
