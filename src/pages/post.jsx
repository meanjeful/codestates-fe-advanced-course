import React, { useState, useEffect } from "react";
import postApi from "../apis/api/post";
import postService from "../apis/services/post";
import Post from "../components/post";
import ModalViewPost from "../components/modals/modalViewPost";
import Pagenation from "../components/pagenation";
import PostNavbar from "../components/postNavbar";
import Loading from "../components/loading";

const PostPage = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postIdx, setPostIdx] = useState(1);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
    await setPostIdx(offset + idx + 1);
    setIsPostModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen border-8">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <div className="border-2 flex w-full h-20 items-center justify-center gap-4">
          <img src="/images/icon.png" alt="error" className="w-10 h-10" />
          <div className="text-3xl font-black">POSTS</div>
          <img src="/images/icon.png" alt="error" className="w-10 h-10" />
        </div>
        <div className="flex flex-col w-full">
          <PostNavbar />
          {postList.slice(offset, offset + limit).map((data, idx) => {
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
          <Pagenation
            total={postList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
          <ModalViewPost
            modalOpen={isPostModalOpen}
            closeModal={() => setIsPostModalOpen(false)}
            postIdx={postIdx}
          />
        </div>
      </div>
    );
  }
};

export default PostPage;
