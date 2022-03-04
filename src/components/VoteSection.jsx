import React from "react";
import { useDispatch } from "react-redux";
import { downVote, upVote } from "../redux/actions/postActions";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

const VoteSection = ({ id, number }) => {
  const dispatch = useDispatch();
  const handleUpvote = () => dispatch(upVote(id));
  const handleDownvote = () => dispatch(downVote(id));
  return (
    <div className="voteSection">
      <Button
        type="primary"
        icon={<ArrowUpOutlined />}
        size={"large"}
        onClick={handleUpvote}
      />
      <Typography.Title level={4} className="voteNum">
        {number}
      </Typography.Title>

      <Button
        type="primary"
        icon={<ArrowDownOutlined />}
        size={"large"}
        onClick={handleDownvote}
      />
    </div>
  );
};

export default VoteSection;
