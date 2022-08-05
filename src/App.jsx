import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./pages/post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
