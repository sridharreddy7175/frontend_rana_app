import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsersPage } from "../pages/Dashboard/users/users";
import { UserForm } from "../pages/Dashboard/users/form";
import { MoviesPage } from "../pages/adminDashboard/movies/movies";
import { MoviesForm } from "../pages/adminDashboard/movies/moviesForm";
import { PostsPage } from "../pages/adminDashboard/posts/posts";
import { PostsForm } from "../pages/adminDashboard/posts/postForm";
import { ReelsPage } from "../pages/adminDashboard/reels/reels";
import { ReelsForm } from "../pages/adminDashboard/reels/reelsForm";
import { EventsForm } from "../pages/adminDashboard/events/evenstForm";
import { EventsPage } from "../pages/adminDashboard/events/events";

export const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UsersPage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/reels" element={<ReelsPage />}></Route>
        <Route path="/events" element={<EventsPage/>}></Route>
        <Route path="/users/form" element={<UserForm />}></Route>
        <Route path="/movies/form" element={<MoviesForm />}></Route>
        <Route path="/posts/form" element={<PostsForm />}></Route>
        <Route path="/reels/form" element={<ReelsForm />}></Route>
        <Route path="/events/form" element={<EventsForm />}></Route>
      </Routes>
    </div>
  );
};
