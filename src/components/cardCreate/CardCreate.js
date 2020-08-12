import React from 'react';
import './cardCreate.css';

class CardCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: '',
      text: '',
      img: ''
    };
    
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  handleChangeText(event) {
    const splitString = event.target.value.split('.');

    this.setState({theme: splitString[0], text: splitString[1]});
  }

  handleChangeImg(event) {
    this.setState({img: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.handleOnSubmit(this.state);
  }

  render() {
    return(
      <div className = 'creator'>
        <form onSubmit={this.onSubmit}>
          <textarea onChange={this.handleChangeText} 
            name='textInput' 
            type='textarea' 
            placeholder='Введите основной текст' 
            value={this.props.text} />
          <input 
            onChange={this.handleChangeImg} 
            name='imgInput' 
            type='text' 
            placeholder='Укажите ссылку на картинку' 
            value={this.props.img} />
          <button>Создать</button>
        </form>
      </div>
    );
  }
}

export default CardCreate;
