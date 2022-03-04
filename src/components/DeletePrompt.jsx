import React from "react";
import { Popconfirm, message, Button } from "antd";
import { IconText } from ".";
import { DeleteOutlined } from "@ant-design/icons";
import {
  DELETE_MESSAGE,
  DELETE_NO,
  DELETE_YES,
  DELETE_CONFIRMED,
} from "../constants/lang";

const DeletePrompt = (props) => {
  const confirm = (e) => {
    message.success({ DELETE_CONFIRMED });
    props.handleDelete(props.id);
  };

  const cancel = (e) => {
    console.log(e);
    // message.error("Click on No");
  };

  return (
    <Popconfirm
      title={DELETE_MESSAGE}
      onConfirm={confirm}
      onCancel={cancel}
      okText={DELETE_YES}
      cancelText={DELETE_NO}
    >
      <Button>
        <IconText icon={DeleteOutlined} />
      </Button>
    </Popconfirm>
  );
};

export default DeletePrompt;
