import React, { useState, useEffect } from "react";
import postApi from "../apis/api/post";
import postService from "../apis/services/post";
import Post from "./post";
import ModalViewPost from "./modals/modalViewPost";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postIdx, setPostIdx] = useState(1);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  useEffect(() => {
    const getPostList = async () => {
      const res = await postApi.getAllPost();
      const data = await postService.getPostList(res);
      setPostList(data);
      setIsLoading(false);
    };
    getPostList();
  }, []);

  const setPostToModal = async (idx) => {
    await setPostIdx(idx + 1);
    setIsPostModalOpen(true);
  };

  if (isLoading) {
    return <div>loading~~</div>;
  } else {
    return (
      <div className="flex flex-col gap-4">
        {postList.map((data, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setPostToModal(idx);
              }}
            >
              <Post key={idx} props={data} />
            </div>
          );
        })}
        <ModalViewPost
          modalOpen={isPostModalOpen}
          closeModal={() => setIsPostModalOpen(false)}
          postIdx={postIdx}
        />
      </div>
    );
  }
};

export default PostList;
