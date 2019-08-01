import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './FooterSocialBlock.module.css';
import globus from '../../../assets/icons/globus.svg';
import twitter from '../../../assets/icons/twitter.svg';
import facebook from '../../../assets/icons/facebook.svg';
import vk from '../../../assets/icons/vk.svg';
import telegram from '../../../assets/icons/telegram.svg';
import youtube from '../../../assets/icons/youtube.svg';
import zen from '../../../assets/icons/zen.svg';

const FooterSocialBlock = () => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <p className={style.copyYear}>
        &copy; 2006 - 2019 &#171;
        <a className={style.tmLink} href="https://tmtm.ru/">
          TM
        </a>
        &#187;
      </p>
      <div className={style.linkContainer}>
        <NavLink to="/" className={style.link}>
          <img
            className={style.globusIcon}
            width="18"
            height="18"
            src={globus}
            alt="globus"
          />
          Настройки языка
        </NavLink>
        <NavLink to="/about" className={style.link}>
          О сайте
        </NavLink>
        <NavLink to="/feedback" className={style.link}>
          Служба поддержки
        </NavLink>
        <NavLink to="/" className={style.link}>
          Мобильная версия
        </NavLink>
      </div>
      <div className={style.buttonContainer}>
        <a href="https://twitter.com/?lang=ru" target="_blank">
          <img
            className={style.twitter}
            width="32"
            height="32"
            src={twitter}
            alt="twitter"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            className={style.facebook}
            width="32"
            height="32"
            src={facebook}
            alt="facebook"
          />
        </a>
        <a href="https://vk.com/" target="_blank">
          <img className={style.vk} width="32" height="32" src={vk} alt="vk" />
        </a>
        <a href="https://web.telegram.org/#/login" target="_blank">
          <img
            className={style.telegram}
            width="32"
            height="32"
            src={telegram}
            alt="telegram"
          />
        </a>
        <a href="https://www.youtube.com/?gl=UA&hl=ru" target="_blank">
          <img
            className={style.youtube}
            width="32"
            height="32"
            src={youtube}
            alt="youtube"
          />
        </a>
        {/* <a href="https://zen.yandex.ru/" target="_blank"> */}
        <img className={style.zen} width="32" height="32" src={zen} alt="zen" />
        {/* </a> */}
      </div>
    </div>
  </div>
);

export default FooterSocialBlock;
