import React from "react";
import { PostForm } from "../../components";
import { PageHeader } from "antd";
import { ADD_HEADER } from "../../constants/lang";

const Add = () => {
  return (
    <div>
      <PageHeader title={ADD_HEADER} />
      <div className="formContent">
        <PostForm />
      </div>
    </div>
  );
};

export default Add;
