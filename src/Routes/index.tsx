import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/login/register";
import { ForgotPasswordPage } from "../pages/login/forgot-password";
import { DashboardPage } from "../pages/Dashboard/dashboard";
import { UsersPage } from "../pages/Dashboard/users/users";
import { UserForm } from "../pages/Dashboard/users/form";
import { MoviesPage } from "../pages/adminDashboard/movies/movies";
import { MoviesForm } from "../pages/adminDashboard/movies/moviesForm";
import { PostsForm } from "../pages/adminDashboard/posts/postForm";
import { PostsPage } from "../pages/adminDashboard/posts/posts";
import { ReelsPage } from "../pages/adminDashboard/reels/reels";
import { ReelsForm } from "../pages/adminDashboard/reels/reelsForm";
import { EventsForm } from "../pages/adminDashboard/events/evenstForm";
import { EventsPage } from "../pages/adminDashboard/events/events";

interface Props {}

export const RoutesPage = (props: Props) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          ></Route>
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="/dashboard/users" element={<UsersPage />}></Route>
            <Route path="/dashboard/movies" element={<MoviesPage />}></Route>
            <Route path="/dashboard/posts" element={<PostsPage />}></Route>
            <Route path="/dashboard/reels" element={<ReelsPage />}></Route>
            <Route path="/dashboard/events" element={<EventsPage />}></Route>
            <Route path="/dashboard/users/form" element={<UserForm />}></Route>
            <Route
              path="/dashboard/movies/form"
              element={<MoviesForm />}
            ></Route>
            <Route path="/dashboard/posts/form" element={<PostsForm />}></Route>
            <Route path="/dashboard/reels/form" element={<ReelsForm />}></Route>
            <Route
              path="/dashboard/events/form"
              element={<EventsForm />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
