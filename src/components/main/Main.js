import React from 'react';
import './main.css';
import Card from '../card/Card';
import CardCreate from '../cardCreate/CardCreate';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsArr: []
    };
  }
  render() {
    const addItem = (item) => {
      const { img, theme, text } = item;
      const newItem = (
        <Card 
          key={this.state.cardsArr.length + 1}
          img={img} theme={theme}
          text={text}
          position={0}
        />
      );

      this.setState({
        cardsArr: [...this.state.cardsArr, newItem]
      });
    };

    return (
      <main>
        {this.state.cardsArr.sort((a, b) => a.props.position - b.props.position )}
        <div className='creator'>
          <CardCreate handleOnSubmit={addItem} />
        </div>
      </main>
    );
  }
}

export default Main;
