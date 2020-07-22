import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul className='footer-ul'>
                    <li id='home' className='footer-li'>Главная</li>
                    <li className='footer-li'>Контакты</li>
                    <li className='footer-li'>Все новости</li>
                </ul>
                <hr></hr>
            </footer>
        )
    }
}

export default Footer