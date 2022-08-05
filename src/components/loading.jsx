import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <img src="/images/loading.gif" alt="error" className="w-20 h-20" />
    </div>
  );
};

export default Loading;
