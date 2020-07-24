import React from 'react';
import './main.css';
import Card from '../card/Card';

class Main extends React.Component {
    render() {
        const cardsArr = [
            <Card key='1' img='https://sun9-63.userapi.com/c858528/v858528247/1b4c0f/IKImJTOAhM8.jpg' theme='Первая тема' text='Первый текст' position={1} />,
            <Card key='3' img='https://sun9-9.userapi.com/c857336/v857336360/f4c0f/AE4G0QzkAgw.jpg' theme='Третья' text='Третий текст' position={3} />,
            <Card key='2' img='https://sun9-1.userapi.com/c858024/v858024166/160af7/HEqnJudwj5Y.jpg' theme='Вторая тема' text='Второй текст' position={2} />,
            <Card key='4' img='https://sun9-74.userapi.com/c855724/v855724022/1d7916/slYx-TRUjHc.jpg' theme='Четвёртая' text='Четвёртый текст' position={4} />
        ]   
        // console.log(cardsArr[0].props.position);
        return (
            <main>
                {cardsArr.sort( (a, b) => a.props.position - b.props.position )}
            </main>
        )
    }
}

export default Main
