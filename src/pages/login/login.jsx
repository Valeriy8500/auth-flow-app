import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { defaultLogState } from "../../constans/constans";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectorUsers } from "../../redux/selectors";
import { saveAuthStatus } from "../../redux/users";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [value, setValue] = useState(defaultLogState);
  const [disabled, setDisabled] = useState(true);

  const dispatch = useAppDispatch();
  const usersData = useAppSelector(selectorUsers);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      value.login !== '' &&
      value.password !== ''
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const onBtnOkHandler = (e) => {
    e.preventDefault();
    const loginData = {
      login: value.login.trim(),
      password: value.password.trim(),
      auth: true
    };

    const localStorageData = JSON.parse(localStorage.getItem("user"));

    if (localStorageData) {
      const copyUsersData = [...usersData];
      copyUsersData.push(localStorageData);

      const validateLoginByUsersData = copyUsersData.some((item) =>
        item.login === loginData.login && item.password === loginData.password
      );

      if (validateLoginByUsersData) {
        toast.success('Авторизация прошла успешно!');
        setValue(defaultLogState);
        dispatch(saveAuthStatus(loginData));
        navigate("/profile");
      } else {
        toast.error('Имя пользователя или пароль введены не верно');
      }
    } else {
      const validateLogin = usersData.some((item) =>
        item.login === loginData.login && item.password === loginData.password
      );

      if (validateLogin) {
        toast.success('Авторизация прошла успешно!');
        setValue(defaultLogState);
        dispatch(saveAuthStatus(loginData));
        navigate("/profile");
      } else {
        toast.error('Имя пользователя или пароль введены не верно');
      }
    }
  };

  const onChangeItem = (name, e) => {
    if (e.target.value.trim() === '') {
      setValue((prev) => ({ ...prev, [name]: '' }));
    } else {
      setValue((prev) => ({ ...prev, [name]: e.target.value }));
    }
  };

  return (
    <div className='login-container'>
      <div className='login-container__header'>
        <h2 className='login-container__title'>Авторизация</h2>
      </div>
      <form
        className='form'
        id='form'
        onSubmit={(e) => onBtnOkHandler(e)}>

        <label className='form__label'>
          Логин *
          <input
            name='login'
            className='form__input'
            type='text'
            placeholder=' Введите логин'
            onChange={(e) => onChangeItem('login', e)}
            value={value.login} />
        </label>

        <label className='form__label'>
          Пароль *
          <input
            name='password'
            className='form__input'
            type='password'
            placeholder=' Введите пароль'
            onChange={(e) => onChangeItem('password', e)}
            value={value.password}
          />
        </label>

        <p className='form_paragraph'>
          Поля, помеченные * обязательны для заполнения
        </p>
      </form>

      <div className='form__button-block'>
        <button
          className={disabled ? 'form__button form__button-dsbl' : 'form__button'}
          disabled={disabled}
          form='form'
        >
          Ок
        </button>
      </div>

      <ToastContainer />
    </div>
  )
};


