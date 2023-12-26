import React, { useState, useEffect } from "react";
import { defaultLogState } from "../../constans/constans";

export const Login = () => {
  const [value, setValue] = useState(defaultLogState);
  const [disabled, setDisabled] = useState(true);

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
    console.log('onBtnOkHandler');

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

  const onChangeItem = (id, e) => {
    console.log(e.target.value);

    if (e.target.value.trim() === '') {
      setValue((prev) => ({ ...prev, [id]: '' }));
    } else {
      setValue((prev) => ({ ...prev, [id]: e.target.value }));
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
            id='login'
            className='form__input'
            type='text'
            placeholder=' Введите логин'
            onChange={(e) => onChangeItem('login', e)}
            value={value.login} />
        </label>

        <label className='form__label'>
          Пароль *
          <input
            id='password'
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
    </div>
  )
};


