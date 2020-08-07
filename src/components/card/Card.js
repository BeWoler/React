import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    const {img, theme, text} = this.props;

    return (
      <div className='card'>
        <img className='cards-preview' src={img} alt='Preview'></img>
        <div className='text-box'>
          <p className='main-theme'>{theme}</p>
          <span className='main-text'>{text}</span>
        </div>
        <button className='button-next'>Далее</button>
      </div>
    );
  }
}

export default Card;
