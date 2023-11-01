import React from "react";
import "../../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import MainLayout from "../layouts/MainLayout";
import Posts from "./Posts";
import Comments from "./Comments";
import Users from "./Users";

const ComponentsContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Posts />} />
          <Route path="comments" element={<Comments />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ComponentsContainer;
