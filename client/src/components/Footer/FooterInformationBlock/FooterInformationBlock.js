import React from 'react';
import PropTypes from 'prop-types';
import FooterInformationSection from './FooterInfromationSection/FooterInformationSection';
import style from './FooterInformationBlock.module.css';


const FooterInformationBlock = ({ linkArr }) => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <FooterInformationSection
        title="Ваш аккаунт"
        linkArr={linkArr.slice(0, 2)}
      />
      <FooterInformationSection title="Разделы" linkArr={linkArr.slice(2, 8)} />
      <FooterInformationSection
        title="Информация"
        linkArr={linkArr.slice(8, 13)}
      />
      <FooterInformationSection
        title="Услуги"
        linkArr={linkArr.slice(13, 17)}
      />
    </div>
    <p className={style.mistakeText}>
      Если нашли опечатку в посте, выделите ее и нажмите Ctrl+Enter, чтобы
      сообщить автору.
    </p>
  </div>
);

export default FooterInformationBlock;
