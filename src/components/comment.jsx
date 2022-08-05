import React from "react";

const Comment = (props) => {
  const { name, body } = props.props;
  return (
    <div className="flex flex-row py-2 px-8 border-t-2 gap-4">
      <div className="w-40 text-sm font-semibold text-google-2">{name}</div>
      <div className="w-full text-sm">{body}</div>
    </div>
  );
};

export default Comment;
