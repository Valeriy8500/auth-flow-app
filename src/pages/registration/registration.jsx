import React, { useState, useEffect } from "react";

export const Registration = () => {
  const [value, setValue] = useState({
    name: '',
    login: '',
    password: '',
    confirmPassword: ''
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (
      value.name !== '' &&
      value.login !== '' &&
      value.password !== '' &&
      value.confirmPassword !== ''
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
    if (e.target.value.trim() === '') {
      setValue((prev) => ({ ...prev, [id]: '' }));
    } else {
      setValue((prev) => ({ ...prev, [id]: e.target.value }));
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
            id='name'
            className='form__input'
            type='text'
            placeholder=' Введите имя'
            onChange={(e) => onChangeItem('name', e)}
            value={value.name} />
        </label>

        <label className='form__label'>
          Логин *
          <input
            id='login'
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
            id='password'
            className='form__input'
            type='password'
            placeholder=' Введите пароль'
            onChange={(e) => onChangeItem('password', e)}
            value={value.password}
          />
        </label>

        <label className='form__label'>
          Подтверждение пароля *
          <input
            id='confirmPassword'
            className='form__input'
            type='password'
            placeholder=' Подтвердите пароль'
            onChange={(e) => onChangeItem('confirmPassword', e)}
            value={value.confirmPassword}
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


