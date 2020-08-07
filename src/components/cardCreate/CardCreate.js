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
  
  handleChangeText(e) {
    const theme = e.target.value.split('.')[0],
      text = e.target.value.split('.')[1];

    this.setState({theme: theme});
    this.setState({text: text});
  }

  handleChangeImg(e) {
    this.setState({img: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.handleOnSubmit(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <textarea onChange={this.handleChangeText} name='textInput' type='textarea' placeholder='Введите основной текст' value={this.props.text} />
          <input onChange={this.handleChangeImg} name='imgInput' type='text' placeholder='Укажите ссылку на картинку' value={this.props.img} />
          <button>Создать</button>
        </form>
      </div>
    );
  }
}

export default CardCreate;
