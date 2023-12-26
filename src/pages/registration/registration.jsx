import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { defaultRegState } from "../../constans/constans";

export const Registration = () => {
  const [value, setValue] = useState(defaultRegState);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({});
  const navigate = useNavigate();

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
  }, [value]);

  const onBtnOkHandler = (e) => {
    e.preventDefault();
    setError({});
    setValue(defaultRegState);
    navigate("");

    // const newEl = {
    //   ...value,
    //   id: currId ? currId : value.id,
    //   companyName: value.companyName.trim(),
    //   employeesCount: String(value.employeesCount).trim(),
    //   companyAddress: value.companyAddress.trim(),
    //   employees: currId ? value.employees : [],
    // };

    // console.log('newEl: ', newEl);

    // if (currId) {
    //   dispatch(editCompany(newEl));
    // } else {
    //   dispatch(addCompany(newEl));
    // }

    // dispatch(toogleCompanyDetailsModal(companiesDetailsState));
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
      </div>
    </div>
  )
};


