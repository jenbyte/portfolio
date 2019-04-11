import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import './index.scss';
import BgWrapper from '../../components/BgWrapper';
import TitleWrapper from '../../components/TitleWrapper';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <BgWrapper>
          <TitleWrapper>
            <h1 className="title">About me</h1>
          </TitleWrapper>
          <p className="text">
            I remember when my brother first showed me how to play a simple song
            on the computer by writing simple code. I was facinated by how a
            simple combinations of characters can create a familiar sound.
          </p>
        </BgWrapper>
      </div>
    );
  }
}

About.propTypes = {};

export default About;
