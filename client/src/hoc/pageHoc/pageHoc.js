import React, { Component } from 'react';
import style from './pageHoc.module.css';

const pageHoc = WrappedComponent => {
  return class HigherOrderComponent extends Component {
    render() {
      return (
        <div className={style.container}>
          <div className={style.wrapper}>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
};

export default pageHoc;
