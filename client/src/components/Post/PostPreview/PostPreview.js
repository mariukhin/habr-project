import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './PostPreview.module.css';
import TitleBlock from '../TitleBlock/TitleBlock';
import ReadMoreButton from '../../shared/ReadMoreButton/ReadMoreButton';
import StatisticBlock from '../StatisticBlock/StatisticBlock';

export default class PostPreview extends Component {
  state = {};

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    const {
      post: { previewText, postImage, postId, postStatistic },
      post,
    } = this.props;
    return (
      <div className={style.container}>
        <TitleBlock post={post} />
        <img
          src={postImage}
          alt="previewImage"
          className={style.previewImage}
        />
        <p
          dangerouslySetInnerHTML={{ __html: previewText }}
          className={style.previewText}
        />
        <ReadMoreButton path={`/post/${postId}`} />
        <StatisticBlock info={postStatistic} />
      </div>
    );
  }
}
