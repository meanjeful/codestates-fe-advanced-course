import React from "react";

const Post = (props) => {
  const { userId, title } = props.props;
  return (
    <div className="flex flex-row gap-20 h-12 px-16 py-2 border-[1px] text-lg hover:bg-gray-200 cursor-pointer">
      <div>{userId}</div>
      <div>{title}</div>
    </div>
  );
};

export default Post;
