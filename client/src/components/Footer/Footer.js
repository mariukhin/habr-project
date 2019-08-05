import React from 'react';
import PropTypes from 'prop-types';
import style from './Footer.module.css';
import FooterInformationBlock from './FooterInformationBlock/FooterInformationBlock';
import FooterSocialBlock from './FooterSocialBlock/FooterSocialBlock';

const linkArr = [
  { path: '/exit', name: 'Войти' },
  { path: '/registration', name: 'Регистрация' },
  { path: '/', name: 'Публикации' },
  { path: '/news', name: 'Новости' },
  { path: '/hubs', name: 'Хабы' },
  { path: '/companies', name: 'Компании' },
  { path: '/users', name: 'Пользователи' },
  { path: '/sandbox', name: 'Песочница' },
  { path: '/rules', name: 'Правила' },
  { path: '/help', name: 'Помощь' },
  { path: '/docs', name: 'Документация' },
  { path: '/agreenment', name: 'Соглашение' },
  { path: '/conf', name: 'Конфиденциальность' },
  { path: '/advertising', name: 'Реклама' },
  { path: '/pricelist', name: 'Тарифы' },
  { path: '/content', name: 'Контент' },
  { path: '/workshops', name: 'Семинары' },
];
const Footer = () => (
  <footer className={style.footer}>
    <FooterInformationBlock linkArr={linkArr} />
    <FooterSocialBlock />
  </footer>
);

export default Footer;
