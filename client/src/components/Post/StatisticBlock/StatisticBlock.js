import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticBlock.module.css';
import voteArrow from '../../../assets/icons/voteArrow.svg';
import book from '../../../assets/icons/book.svg';
import eye from '../../../assets/icons/eye.svg';
import comment from '../../../assets/icons/comment.svg';

const StatisticBlock = ({
  info: { ratingPlus, ratingMinus, saved, views, comments },
}) => (
  <div className={style.container}>
    <ul className={style.statisticList}>
      <li className={style.statisticList_item}>
        <img
          width="15"
          height="15"
          className={style.icon}
          src={voteArrow}
          alt="voteArrow"
        />
        +{ratingPlus}
      </li>
      <li className={style.statisticList_item}>
        <img
          width="15"
          height="15"
          className={style.iconVoteArrowDown}
          src={voteArrow}
          alt="voteArrowDown"
        />
        -{ratingMinus}
      </li>
      <li className={style.statisticList_item}>
        <img
          width="15"
          height="15"
          className={style.icon}
          src={book}
          alt="book"
        />
        {saved}
      </li>
      <li className={style.statisticList_item}>
        <img
          width="20"
          height="20"
          className={style.icon}
          src={eye}
          alt="eye"
        />
        {views}
      </li>
      <li className={style.statisticList_item}>
        <img
          width="15"
          height="15"
          className={style.icon}
          src={comment}
          alt="comment"
        />
        {comments}
      </li>
    </ul>
  </div>
);
export default StatisticBlock;
