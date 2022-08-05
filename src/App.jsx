import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./components/postList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
