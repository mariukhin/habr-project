import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import Nav from './Nav/Nav';
import ButtonContainer from './ButtonContainer/ButtonContainer';
import logo from '../../assets/icons/logo.svg';

const Header = () => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <NavLink to="/" exact>
        <img
          width="71"
          height="26"
          className={style.logo}
          src={logo}
          alt="logo"
        />
      </NavLink>
      <Nav />
      <ButtonContainer />
    </div>
  </div>
);

export default Header;
