import React from 'react';
import './main.css';
import cardFirst from '../img/card1.jpg';
import cardSecond from '../img/card2.jpg';
import cardThird from '../img/card3.jpg';
import cardFourth from '../img/card4.jpg';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className='news-card'>
                    <img className='cards-preview' src={cardFirst} alt='Preview'></img>
                    <div className='news-text-box'>
                        <p className='news-theme'>В Индии колдун «изгонял беса».
                        Девушку накормили фекалиями, 
                        а потом подожгли</p>
                        <span className='news-text'>В индийском городе Малкангири произошел
                        вопиющий случай во время
                        эзотерического сеанса.</span>
                    </div>
                    <button className='button-next'>Далее</button>
                </div>
                <div className='news-card'>
                    <img className='cards-preview' src={cardSecond} alt='Preview'></img>
                    <div className='news-text-box'>
                        <p className='news-theme'>Ученые определили настоящую причину
                        появления мурашек на коже</p>
                        <span className='news-text'>Американские исследователи определили, 
                        что те же типы клеток, которые приводят к появлению мурашек на теле, 
                        отвечают за контроль роста волос. Об этом сообщают зарубежные СМИ.</span>
                    </div>
                    <button className='button-next'>Далее</button>
                </div>
                <div className='news-card'>
                    <img className='cards-preview' src={cardThird} alt='Preview'></img>
                    <div className='news-text-box'>
                        <p className='news-theme'>К Земле летят потенциально опасные астероиды: 
                        названы даты</p>
                        <span className='news-text'>К Земле приближается массивный астероид.</span>
                    </div>
                    <button className='button-next'>Далее</button>
                </div>
                <div className='news-card'>
                    <img className='cards-preview' src={cardFourth} alt='Preview'></img>
                    <div className='news-text-box'>
                        <p className='news-theme'>Российские школьники открыли
                        новый остров в Арктике</p>
                        <span className='news-text'>Российские СМИ сообщили об 
                        открытии нового острова в Арктике. Оказалось, 
                        что российские школьники нашли в Северном Ледовитом океане территорию, 
                        которая ранее не была известна.</span>
                    </div>
                    <button className='button-next'>Далее</button>
                </div>
            </main>
        )
    }
}

export default Main