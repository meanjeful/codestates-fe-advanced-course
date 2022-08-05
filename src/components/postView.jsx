import React, { useState, useEffect } from "react";
import postApi from "../apis/api/post";
import postService from "../apis/services/post";

const PostView = ({ postIdx }) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPostData = async () => {
      const res = await postApi.getPost(postIdx);
      const data = await postService.viewPost(res);
      setPostData(data);
      setIsLoading(false);
    };
    getPostData();
  }, []);

  // const {} = props.props;

  if (isLoading) {
    return <div>loading~~</div>;
  } else {
    return (
      <div>
        <div>{postData.userId}</div>
        <div>{postData.title}</div>
        <div>{postData.body}</div>
      </div>
    );
  }
};

export default PostView;
