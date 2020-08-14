import React from 'react';
import './card.css';
import Moment from 'react-moment';
import 'moment-timezone';

class Card extends React.Component {
  render() {
    const {img, theme, text} = this.props;

    return (
      <div className='card'>
        <img className='cards-preview' src={img} alt='Preview'></img>
        <div className='text-box'>
          <p className='main-theme'>{theme}</p>
          <p className='main-text'>{text}</p>
        </div>
        <div>
          <Moment className='date' interval={0} format='DD.MM.YYYY' />
          <Moment className='time' interval={0} format='HH:mm' />
          <button className='button-next'>Далее</button>
        </div>
      </div>
    );
  }
}

export default Card;
