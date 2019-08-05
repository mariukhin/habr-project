import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.navList}>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/" exact>
        Публикации
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/news">
        Новости
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/users">
        Пользователи
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/hubs" exact>
        Хабы
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/companies">
        Компании
      </NavLink>
    </li>
    <li className={styles.navListItem}>
      <NavLink className={styles.link} to="/sandbox">
        Песочница
      </NavLink>
    </li>
  </ul>
);

export default Nav;
