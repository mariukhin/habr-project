import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './TopicSelector.module.css';
import line from '../../assets/icons/line.svg';

export default class TopicSelector extends Component {
  state = {
    onShowTopic: false,
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ onShowTopic: !prevState.onShowTopic }));
  };

  render() {
    const { topics, currentTopic } = this.props;
    const { onShowTopic } = this.state;
    return (
      <div className={style.topicContainer}>
        <button
          className={style.changeTopicBtn}
          type="button"
          onClick={this.handleClick}
        >
          <span className={style.buttonText}>{currentTopic}</span>
          <img
            style={{ transform: onShowTopic ? 'rotate(180deg)' : 'none' }}
            width="10"
            height="10"
            className={style.line}
            src={line}
            alt="line"
          />
        </button>
        {onShowTopic && (
          <div className={style.topicsBlock}>
            <span className={style.span} />
            {topics.map(item => (
              <div className={style.blockItem} key={item.name}>
                <div className={style.linkWrapper}>
                  <NavLink className={style.link} to={item.path} exact>
                    {item.name}
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
