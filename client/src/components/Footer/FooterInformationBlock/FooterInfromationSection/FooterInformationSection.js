import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './FooterInformationSection.module.css';

const FooterInformationSection = ({ title, linkArr }) => (
  <div className={style.section}>
    <p className={style.sectionTitle}>{title}</p>
    <span className={style.span} />
    {linkArr.map(item => (
      <NavLink className={style.sectionLink} to={item.path} key={item}>
        {item.name}
      </NavLink>
    ))}
  </div>
);
export default FooterInformationSection;
