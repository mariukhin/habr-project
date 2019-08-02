import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './PostPreview.module.css';

export default class PostPreview extends Component {
  state = {};

  render() {
    return (
      <div className={style.container}>
        <TitleBlock />
        <img src="" alt="previewImage" className={style.previewImage} />
        <p className={style.previewText}>
          Loremdvedddddddddddddddddddddd dvvvvvvvvvvvvvvvvvvvvvvvvvvsvvsvdsvweav
          wevvewvevewvewv
        </p>
        <ReadMoreButton />
        <StatisticBlock />
      </div>
    );
  }
}
