import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { saveAuthStatus } from "../../redux/users";

export const Profile = () => {
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onExit = () => {
    dispatch(saveAuthStatus({ ...localStorageData, auth: false }));
    navigate("/");
  };

  if (!localStorageData || !localStorageData?.auth) {
    return <Navigate to="/login" />
  }

  return (
    <div className="profile-container">
      <h2 className="profile-container__title">
        Добро пожаловать {localStorageData.name}!
      </h2>
      <button
        className="profile-container__button"
        onClick={() => onExit()}
      >
        Выход
      </button>
    </div>
  );
};