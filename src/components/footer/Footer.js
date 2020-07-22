import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul>
                    <li id='home' className='footer-li'>Главная</li>
                    <li>Контакты</li>
                    <li>Все новости</li>
                </ul>
                <hr></hr>
            </footer>
        )
    }
}

export default Footer
