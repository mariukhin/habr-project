import React from 'react';
import PropTypes from 'prop-types';
import style from './ButtonContainer.module.css';
import search from '../../../assets/icons/search.svg';
import globus from '../../../assets/icons/globus.svg';

const ButtonContainer = () => (
  <div className={style.container}>
    <button className={style.btnSearch} type="button">
      <img
        className={style.svgIcon}
        width="18"
        height="18"
        src={search}
        alt="search"
      />
    </button>
    <button className={style.btnLanguage} type="button">
      <img
        className={style.svgIcon}
        width="18"
        height="18"
        src={globus}
        alt="globus"
      />
    </button>
    <button type="button" className={style.btnExit}>
      Войти
    </button>
    <button type="button" className={style.btnRegistration}>
      Регистрация
    </button>
  </div>
);
export default ButtonContainer;
