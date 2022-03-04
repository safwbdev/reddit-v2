import React from "react";
import { Card, Col, Row, PageHeader } from "antd";
import { Link } from "react-router-dom";
import { topics } from "../../constants/topics";
import { SEE_MORE } from "../../constants/lang";
import { TOPIC } from "../../constants/routes";

const Topics = () => {
  return (
    <div>
      <PageHeader title="Browse Topics" />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {topics.map(({ label, value, desc }) => (
          <Col xs={24} sm={24} md={24} lg={24} xl={6} key={label}>
            <Card
              className="topicCard"
              title={<Link to={TOPIC.generate(value)}>{`r/${value}`}</Link>}
              actions={[<Link to={TOPIC.generate(value)}>{SEE_MORE}</Link>]}
            >
              <p>{desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Topics;
