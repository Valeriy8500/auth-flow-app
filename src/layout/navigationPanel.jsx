import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const NavigationPanel = () => {
  return (
    <>
      <div className="navigation-panel">
        <NavLink
          to="/"
          className="navigation-panel_home"
        >
          <h2>На главную</h2>
        </NavLink>
        <NavLink
          to="/login "
          className="navigation-panel_navlink"
        >
          Авторизация
        </NavLink>
        <NavLink
          to="/registration"
          className="navigation-panel_navlink"
        >
          Регистрация
        </NavLink>
        <NavLink
          to="/profile"
          className="navigation-panel_navlink"
        >
          Профиль
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};