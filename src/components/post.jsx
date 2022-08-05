import React from "react";

const Post = (props) => {
  const { userId, title } = props.props;
  return (
    <div className="flex flex-row gap-4 border-2">
      <div>{userId}</div>
      <div>{title}</div>
    </div>
  );
};

export default Post;
