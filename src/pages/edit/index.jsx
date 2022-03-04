import React from "react";
import { PostForm } from "../../components";
import { PageHeader } from "antd";
import { EDIT_HEADER } from "../../constants/lang";

const Edit = () => {
  return (
    <div>
    <PageHeader title={EDIT_HEADER} />
      <div className="formContent">
        <PostForm />
      </div>
    </div>
  );
};

export default Edit;
