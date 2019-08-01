import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './AsideFlowBlock.module.css';

const AsideFlowBlock = ({ topics }) => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <p className={style.blockTitle}>Потоки</p>
      {topics.map(item => (
        <Fragment key={item.name}>
          <span className={style.span} />
          <div className={style.blockItem}>
            <NavLink className={style.link} to={item.path} exact>
              {item.name}
            </NavLink>
            <span className={style.counter}>+{item.count}</span>
          </div>
        </Fragment>
      ))}
    </div>
  </div>
);

export default AsideFlowBlock;
