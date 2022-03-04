import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Button, Typography,  } from "antd";
import { deletePost,  } from "../redux/actions/postActions";
import { HeartOutlined, EditOutlined, HeartFilled } from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";
import { VoteSection, IconText, DeletePrompt } from ".";
import {
  POST_BY_USER,
} from "../constants/lang";
import { addFavorite, removeFavorite } from "../redux/actions/favoriteActions";
import { EDIT, POST, TOPIC } from "../constants/routes";

const Post = ({ data }) => {
  const { id, title, body, votes,  date, user, topic } = data;

  const dispatch = useDispatch();

  let check = false;

  const getFave = useSelector((state) => state.favorites);

  getFave.map((post) => {
    if (post === id) {
      check = true;
    }
    return null
  });

  const handleSave = () => {
    if (check) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };
  const handleDelete = () => dispatch(deletePost(id));
  const checkBody = (e) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return e.replace(urlRegex, function (url) {
      const newBody = '<a href="' + url + '" target="_blank">' + url + "</a>";
      return newBody;
    });
  };

  const htmlBody = (
    <p
      dangerouslySetInnerHTML={{
        __html: checkBody(body),
      }}
    />
  );

  const getDate = moment(date).fromNow();

  const topHeader = (
    <>
      <Link to={TOPIC.generate(topic)} className="voteHeader">{`r/${topic}`}</Link> •{" "}
      <Typography.Text>
        {POST_BY_USER} <strong>{user}</strong>{" "}
        <div className="responsiveBreak">{getDate}</div>
      </Typography.Text>
    </>
  );
  return (
    <List.Item
      className="postList"
      key={id}
      actions={[
        <Link to={EDIT.generate(id)}>
          <Button>
            <IconText icon={EditOutlined} />
          </Button>
        </Link>,
        <Button onClick={() => handleSave()}>
          <IconText icon={check ? HeartFilled : HeartOutlined} />
          {/* <IconText icon={HeartOutlined} /> */}
        </Button>,
        <DeletePrompt id={id} handleDelete={handleDelete} />,
      ]}
      extra={<VoteSection id={id} number={votes} />}
    >
      <List.Item.Meta
        title={<Link to={POST.generate(id)}>{title}</Link>}
        description={topHeader}
      />
      <Typography.Paragraph
        ellipsis={{
          rows: 2,
        }}
      >
        {htmlBody}
      </Typography.Paragraph>
    </List.Item>
  );
};

export default Post;
