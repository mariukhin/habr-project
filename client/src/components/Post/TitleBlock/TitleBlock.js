import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { linkSync } from 'fs';
import style from './TitleBlock.module.css';

const TitleBlock = ({
  post: { profileImage, profileName, publicationDate, postTitle, links },
}) => (
  <div className={style.container}>
    <div className={style.profileInfoBlock}>
      <NavLink to={`/users/${profileName}`} className={style.profileNameLink}>
        <img
          src={profileImage}
          alt="profileImg"
          className={style.profileImage}
        />
        {profileName}
      </NavLink>
      <p className={style.publicationDate}>{publicationDate}</p>
    </div>
    <NavLink to="/publications/id" className={style.postTitle}>
      {postTitle}
    </NavLink>
    <div className={style.linkBlock}>
      {links
        .map(item => (
        <NavLink key={item.name} to={item.path} className={style.link}>
          {item.name}
        </NavLink>
      ))}
    </div>
  </div>
);

export default TitleBlock;
