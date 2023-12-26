import React from "react";

export const Profile = () => {
  const onExit = () => {
    console.log('onExit');
  };

  return (
    <div className="profile-container">
      <h2 className="profile-container__title">
        Добро пожаловать (ИМЯ)!
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