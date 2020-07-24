import React from 'react';
import './card.css';

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <img className='cards-preview' src={this.props.img} alt='Preview'></img>
                <div className='text-box'>
                    <p className='main-theme'>{this.props.theme}</p>
                    <span className='main-text'>{this.props.text}</span>
                </div>
                <button className='button-next'>Далее</button>
            </div>
        )
    }
}

export default Card
 