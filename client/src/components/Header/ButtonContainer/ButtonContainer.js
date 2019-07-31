import React from 'react';
import PropTypes from 'prop-types';
import style from './ButtonContainer.module.css';

const ButtonContainer = () => (
  <div className={style.container}>
    <button className={style.btnSearch} type="button">
      <svg
        className={style.svgIcon}
        width="18"
        height="18"
        viewBox="0 0 32 32"
        aria-hidden="true"
        version="1.1"
        role="img"
        fill="#888686"
      >
        <path d="M21.416 13.21c0 4.6-3.65 8.34-8.14 8.34S5.11 17.81 5.11 13.21c0-4.632 3.65-8.373 8.167-8.373 4.488 0 8.14 3.772 8.14 8.372zm1.945 7.083c1.407-2.055 2.155-4.57 2.155-7.084C25.515 6.277 20.04.665 13.277.665S1.04 6.278 1.04 13.21c0 6.93 5.475 12.542 12.237 12.542 2.454 0 4.907-.797 6.942-2.208l7.6 7.79 3.14-3.22-7.6-7.82z" />
      </svg>
    </button>
    <button className={style.btnLanguage} type="button">
      <svg
        fill="#888686"
        className={style.svgIcon}
        width="18"
        height="18"
        viewBox="0 0 32 32"
      >
        <path d="M21.16 27.308c.724-1.71 1.246-3.766 1.568-5.976h4.496c-1.256 2.634-3.406 4.756-6.064 5.976zm-16.388-5.976h4.498c.32 2.21.844 4.264 1.566 5.976-2.656-1.218-4.808-3.34-6.064-5.976zm6.064-16.644c-.722 1.71-1.246 3.766-1.566 5.976h-4.498c1.256-2.636 3.406-4.76 6.064-5.976zm16.388 5.976h-4.496c-.322-2.21-.844-4.266-1.568-5.976 2.658 1.218 4.808 3.342 6.064 5.976zm-4.16 3.556h5.238c.084.582.142 1.172.142 1.778 0 .604-.06 1.194-.142 1.778h-5.238c.028-.592.046-1.184.046-1.778s-.018-1.188-.046-1.778zm-7.064-10.666c.776 0 2.392 2.46 3.146 7.112h-6.296c.756-4.65 2.374-7.112 3.148-7.112zm-12.444 12.444c0-.606.056-1.196.142-1.778h5.236c-.026.59-.044 1.184-.044 1.778s.018 1.186.044 1.778h-5.236c-.086-.584-.142-1.174-.142-1.778zm8.936 1.778c-.028-.574-.046-1.16-.046-1.778 0-.616.018-1.206.046-1.778h7.016c.028.572.048 1.16.048 1.778 0 .616-.02 1.204-.048 1.778h-7.016zm3.51 10.666c-.776 0-2.392-2.462-3.148-7.112h6.296c-.756 4.648-2.372 7.112-3.146 7.112zm0-28.444c-8.824 0-16 7.176-16 16s7.176 16 16 16 16-7.176 16-16-7.176-16-16-16z" />
      </svg>
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
