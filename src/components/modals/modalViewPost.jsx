import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import postApi from "../../apis/api/post";
import postService from "../../apis/services/post";
import Comment from "../comment";
import Loading from "../loading";

const ModalViewPost = ({ modalOpen, closeModal, postIdx }) => {
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPostData = async () => {
      setIsLoading(true);
      const postRes = await postApi.getPost(postIdx);
      const postsData = await postService.viewPost(postRes);
      const commentsRes = await postApi.getComments(postIdx);
      const commentsData = await postService.viewComments(commentsRes);
      setPostData(postsData);
      setCommentsData(commentsData);
      setIsLoading(false);
    };
    getPostData();
  }, [postIdx]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [modalOpen]);

  if (!modalOpen) return null;

  if (isLoading) {
    return (
      <div className="container-modal">
        <div className="modal-normal">
          <div className="flex flex-col py-8 px-12 gap-4">
            <div className="text-end">
              <button
                onClick={() => {
                  setIsLoading(true);
                  closeModal();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <Loading></Loading>
          </div>
        </div>
      </div>
    );
  } else {
    return ReactDom.createPortal(
      <div className="container-modal">
        <div className="modal-normal">
          <div className="flex flex-col py-8 px-12 gap-4">
            <div className="text-end">
              <button
                onClick={() => {
                  setIsLoading(true);
                  closeModal();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="font-bold text-xl text-center text-google-1">
              {postData.title}
            </div>
            <div className="text-right">작성자 : {postData.userId}</div>
            <div className="pt-4">{postData.body}</div>
          </div>
          {commentData.map((data, idx) => {
            return <Comment key={idx} props={data} />;
          })}
        </div>
      </div>,
      document.getElementById("modal"),
    );
  }
};

export default ModalViewPost;
