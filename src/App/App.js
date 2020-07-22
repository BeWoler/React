import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className='box'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
