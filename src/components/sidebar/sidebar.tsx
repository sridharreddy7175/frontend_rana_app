import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  location?: any;
}

export const SidebarPage = (props: Props) => {
  const sidebarData: any = [
    {
      name: "Users",
      route: "/dashboard/users",
    },
    {
      name: "Movies",
      route: "/dashboard/movies",
    },
    {
      name: "Posts",
      route: "/dashboard/posts",
    },
    {
      name: "Reels",
      route: "/dashboard/reels",
    },
    {
      name: "Events",
      route: "/dashboard/events",
    },
  ];

  return (
    <div>
      <div className="sidebar">
        <ul className="nav-list px-0">
          {sidebarData.map((data: any, index: number) => (
            <NavLink
              key={index}
              to={data.route}
              className="text-decoration-none  text-dark sidemenu-list-item"
            >
              <li className="py-2 pe-5 text-start ps-3 sidemenu-item">
                {data.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};
