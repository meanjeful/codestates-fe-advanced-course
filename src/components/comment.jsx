import React from "react";

const Comment = (props) => {
  const { name, body } = props.props;
  return (
    <div className="flex flex-row gap-4 border-2">
      <div>{name}</div>
      <div>{body}</div>
    </div>
  );
};

export default Comment;
