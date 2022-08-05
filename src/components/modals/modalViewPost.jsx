import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import postApi from "../../apis/api/post";
import postService from "../../apis/services/post";
import Comment from "../comment";

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
    return ReactDom.createPortal(
      <div className="container-modal">
        <div className="modal-normal">
          <div>loading</div>
        </div>
      </div>,
      document.getElementById("modal"),
    );
  } else {
    return ReactDom.createPortal(
      <div className="container-modal">
        <div className="modal-normal">
          <div>{postData.userId}</div>
          <div>{postData.title}</div>
          <div>{postData.body}</div>

          {commentData.map((data, idx) => {
            return <Comment key={idx} props={data} />;
          })}

          <button
            onClick={() => {
              setIsLoading(true);
              closeModal();
            }}
          >
            x
          </button>
        </div>
      </div>,
      document.getElementById("modal"),
    );
  }
};

export default ModalViewPost;
