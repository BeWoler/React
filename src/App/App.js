import React from 'react';
import './App.css';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

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
