const postService = {
  getPostList: (rawPost) => {
    return rawPost.map(({ userId, id, title, body }) => {
      return {
        userId,
        title,
      };
    });
  },
  viewPost: (rawPost) => {
    const { userId, title, body } = rawPost;
    return {
      userId,
      title,
      body,
    };
  },
  viewComments: (rawComments) => {
    return rawComments.map(({ name, body }) => {
      return {
        name,
        body,
      };
    });
  },
};

export default postService;
