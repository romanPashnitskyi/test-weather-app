import React from 'react';
import './Title.scss';

const Title = props => (
  <div className='title'>
    <h1>Weather At <span>{props.city}</span></h1>
  </div>
);

export default Title;
