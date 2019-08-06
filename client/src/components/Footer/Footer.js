import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Footer.module.css';
import FooterInformationBlock from './FooterInformationBlock/FooterInformationBlock';
import FooterSocialBlock from './FooterSocialBlock/FooterSocialBlock';
import { fetchLinks } from '../../services/server-api';

export default class Footer extends Component {
  state = {
    linkArr: [],
  };

  componentDidMount() {
    fetchLinks().then(result => this.setState({ linkArr: result }));
  }

  render() {
    const { linkArr } = this.state;
    return (
      <footer className={style.footer}>
        <FooterInformationBlock linkArr={linkArr} />
        <FooterSocialBlock />
      </footer>
    );
  }
}
