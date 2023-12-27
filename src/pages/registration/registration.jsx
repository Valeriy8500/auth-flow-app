import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { defaultRegState } from "../../constans/constans";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser } from "../../redux/users";
import { selectorUsers } from "../../redux/selectors";
import { generateId } from "../../shared/sharedFunction";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Registration = () => {
  const [value, setValue] = useState(defaultRegState);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();
  const usersData = useAppSelector(selectorUsers);
  const navigate = useNavigate();
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (
      value.name !== '' &&
      value.login !== '' &&
      value.password !== '' &&
      value.confirmPassword !== '' &&
      !error.password.message &&
      !error.confirmPassword.message
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value, error]);

  const onLogin = () => {
    navigate("/login");
  };

  const onBtnOkHandler = (e) => {
    e.preventDefault();
    const newId = generateId(usersData);
    const newElement = {
      id: newId,
      name: value.name.trim(),
      login: value.login.trim(),
      password: value.password.trim()
    };

    const validateUsers = usersData.some((item) => item.login === newElement.login);

    if (validateUsers) {
      toast.error('Пользователь с таким логином уже зарегистрирован');
    } else {
      toast.success('Регистрация прошла успешно!');
      setError({});
      setValue(defaultRegState);
      dispatch(addUser(newElement));
      setShow(true);
    }
  };

  const onChangeItem = (name, e) => {
    if (e.target.value.trim() === '') {
      setValue((prev) => ({ ...prev, [name]: '' }));
    } else {
      let newError = { ...error, [name]: { message: "" } };

      if (name === "password") {
        setValue((prev) => ({ ...prev, [name]: e.target.value }));

        if (e.target.value !== value.confirmPassword) {
          newError = {
            ...error,
            password: { message: "введенные пароли не совпадают" },
            confirmPassword: { message: "введенные пароли не совпадают" },
          };
        } else {
          newError = { ...error, password: { message: "" }, confirmPassword: { message: "" } };
        }
      }
      if (name === "confirmPassword") {
        setValue((prev) => ({ ...prev, [name]: e.target.value }));

        if (e.target.value !== value.password) {
          newError = {
            ...error,
            password: { message: "введенные пароли не совпадают" },
            confirmPassword: { message: "введенные пароли не совпадают" },
          };
        } else {
          newError = { ...error, password: { message: "" }, confirmPassword: { message: "" } };
        }
      }

      setValue((prev) => ({ ...prev, [name]: e.target.value }));
      setError(newError);
    }
  };

  if (localStorageData?.auth) {
    return <Navigate to="/profile" />
  }

  return (
    <div className='registration-container'>
      <div className='registration-container__header'>
        <h2 className='registration-container__title'>Регистрация</h2>
      </div>
      <form
        className='form'
        id='form'
        onSubmit={(e) => onBtnOkHandler(e)}>

        <label className='form__label'>
          Имя *
          <input
            name='name'
            className='form__input'
            type='text'
            placeholder=' Введите имя'
            onChange={(e) => onChangeItem('name', e)}
            value={value.name} />
        </label>

        <label className='form__label'>
          Логин *
          <input
            name='login'
            className='form__input'
            type='text'
            placeholder=' Введите логин'
            onChange={(e) => onChangeItem('login', e)}
            value={value.login}
          />
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
          <p className="password-error">
            {error.password && error.password.message}
          </p>
        </label>

        <label className='form__label'>
          Подтверждение пароля *
          <input
            name='confirmPassword'
            className='form__input'
            type='password'
            placeholder=' Подтвердите пароль'
            onChange={(e) => onChangeItem('confirmPassword', e)}
            value={value.confirmPassword}
          />
          <p className="confirm-password-error">
            {error.confirmPassword && error.confirmPassword.message}
          </p>
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

        {show && (
          <button
            className='form__button'
            form='form'
            onClick={() => onLogin()}
          >
            Авторизоваться
          </button>
        )}
      </div>

      <ToastContainer />
    </div>
  )
};


