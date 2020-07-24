import React from 'react';
import './card.css';
import cardFirst from '../../img/card1.jpg';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <img className='cards-preview' src={cardFirst} alt='Preview'></img>
        <div className='text-box'>
          <p className='main-theme'>В Индии колдун «изгонял беса».
                    Девушку накормили фекалиями, 
                    а потом подожгли</p>
          <span className='main-text'>В индийском городе Малкангири произошел
                    вопиющий случай во время
                    эзотерического сеанса.</span>
        </div>
        <button className='button-next'>Далее</button>
      </div>
    );
  }
}

export default Card;
