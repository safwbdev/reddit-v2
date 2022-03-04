import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { List, Button, Typography, message } from "antd";
import { deletePost, savePost } from "../../redux/actions/postActions";
import { VoteSection, IconText, DeletePrompt } from "../../components";
import moment from "moment";
import { HeartOutlined, EditOutlined, HeartFilled } from "@ant-design/icons";
import {
  FAVORITE_ADDED,
  FAVORITE_REMOVED,
  POST_404,
  POST_BY_USER,
} from "../../constants/lang";
import { EDIT, TOPIC } from "../../constants/routes";

const PostPage = () => {
  const { id } = useParams();

  const getPost = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const { title, body, saved, votes, date, topic, user } = getPost;

  const getDate = moment(date).fromNow();

  const dispatch = useDispatch();

  const handleSave = () => {
    saved ? message.error(FAVORITE_REMOVED) : message.success(FAVORITE_ADDED);
    dispatch(savePost(id));
  };

  const handleDelete = () => dispatch(deletePost(id));

  const checkBody = (e) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return e.replace(urlRegex, function (url) {
      const newBody = '<a href="' + url + '" target="_blank">' + url + "</a>";
      return newBody;
    });
  };

  const htmlBody = () => (
    <p
      dangerouslySetInnerHTML={{
        __html: checkBody(body),
      }}
    />
  );

  let check = false;

  const getFave = useSelector((state) => state.favorites);

  getFave.map((post) => {
    if (post === id) {
      check = true;
    }
  });

  const topHeader = (
    <>
      <NavLink to={TOPIC.generate(topic)} replace className={"postHeader"}>
        {`r/${topic}`}
      </NavLink>{" "}
      •{" "}
      <Typography.Text>
        {POST_BY_USER} <strong>{user}</strong>{" "}
        <div className="responsiveBreak">{getDate}</div>
      </Typography.Text>
    </>
  );

  if (!getPost) {
    return <div>{POST_404}</div>;
  }

  return (
    <div className="postContent">
      <List itemLayout="vertical" size="large">
        <List.Item
          className="postList"
          actions={[
            <Link to={EDIT.generate(id)}>
              <Button>
                <IconText icon={EditOutlined} />
              </Button>
            </Link>,
            <Button onClick={() => handleSave()}>
              <IconText icon={check ? HeartFilled : HeartOutlined} />
            </Button>,
            <DeletePrompt id={id} handleDelete={handleDelete} />,
          ]}
          extra={<VoteSection id={id} number={votes} />}
        >
          <List.Item.Meta title={title} description={topHeader} />
          {htmlBody()}
        </List.Item>
      </List>
    </div>
  );
};

export default PostPage;
