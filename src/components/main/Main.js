import React from 'react';
import './main.css';
import Card from '../card/Card';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
        )
    }
}
export default Main