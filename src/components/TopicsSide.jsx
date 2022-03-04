import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { TOPICS_CARD } from "../constants/lang";
import { topics } from "../constants/topics";
import { TOPIC } from "../constants/routes";

const TopicsSide = () => {
  return (
    <Card title={TOPICS_CARD} className="sideCard">
      {topics.map(({ value }) => (
        <p key={value}>
          <Link to={TOPIC.generate(value)}>{`r/${value}`}</Link>
        </p>
      ))}
    </Card>
  );
};

export default TopicsSide;
