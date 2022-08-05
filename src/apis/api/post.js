import axiosApi from "../utils";

const postApi = {
  getAllPost: () => axiosApi.get("/posts").then((res) => res.data),
  getPost: (idx) => axiosApi.get(`/posts/${idx}`).then((res) => res.data),
  getComments: (idx) =>
    axiosApi.get(`/posts/${idx}/comments`).then((res) => res.data),
};

export default postApi;
