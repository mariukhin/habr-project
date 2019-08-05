import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './ReadMoreButton.module.css';

const ReadMoreButton = ({ path }) => (
  <NavLink to={path} className={style.button}>
    Читать дальше &#62;
  </NavLink>
);
export default ReadMoreButton;
