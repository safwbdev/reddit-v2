import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost } from "../redux/actions/postActions";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { topics } from "../constants/topics";
import {
  FORM_BODY_LABEL,
  FORM_BODY_PLACEHOLDER,
  FORM_SUBMIT,
  FORM_TITLE_LABEL,
  FORM_TITLE_PLACEHOLDER,
  FORM_TOPIC_LABEL,
  FORM_TOPIC_PLACEHOLDER,
} from "../constants/lang";

const PostForm = () => {
  const { id } = useParams();

  let getPost = null;

  getPost = useSelector((state) => state.posts.find((post) => post.id === id));

  const [title, setTitle] = useState(id ? getPost.title : "");
  const [body, setBody] = useState(id ? getPost.body : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };

  const clearAll = () => {
    setTitle("");
    setBody("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      let newData = { title, body };
      dispatch(updatePost(id, newData));
      clearAll();
      navigate(`/post/${id}`);
    } else {
      const newId = uuidv4();
      dispatch(
        addPost({
          id: newId,
          title,
          body,
          editing: false,
          saved: false,
          votes: 0,
          date: Date.now(),
          user: "newUser",
          topic: "art",
        })
      );
      clearAll();
      navigate(`/post/${newId}`);
    }
  };

  const [form] = Form.useForm();

  return (
    <Form layout={"vertical"} form={form}>
      <Form.Item label={FORM_TITLE_LABEL} key={0}>
        <Input
          placeholder={FORM_TITLE_PLACEHOLDER}
          onChange={(e) => handleTitle(e)}
          value={title}
        />
      </Form.Item>
      <Form.Item label={FORM_TOPIC_LABEL}>
        <Select
          showSearch
          placeholder={FORM_TOPIC_PLACEHOLDER}
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {topics.map((topic) => (
            <Select.Option key={topic.value} value={topic.value}>{topic.label}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label={FORM_BODY_LABEL}>
        <Input.TextArea
          rows={4}
          placeholder={FORM_BODY_PLACEHOLDER}
          onChange={(e) => handleBody(e)}
          value={body}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={(e) => handleSubmit(e)}>
          {FORM_SUBMIT}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PostForm;
