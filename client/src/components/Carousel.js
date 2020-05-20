import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import c19pdb from '../assets/images/c19pdb.png'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'COVID Patient Database',
                    subTitle: 'Mock Doctor Portal',
                    imgSrc: c19pdb,
                    link: 'https://fast-wildwood-12677.herokuapp.com/#/',
                    selected: true
                },
                {
                    id: 1,
                    title: 'COVID Patient Database',
                    subTitle: 'Mock Doctor Portal',
                    imgSrc: c19pdb,
                    link: 'https://fast-wildwood-12677.herokuapp.com/#/',
                    selected: true
                },
                {
                    id: 2,
                    title: 'COVID Patient Database',
                    subTitle: 'Mock Doctor Portal',
                    imgSrc: c19pdb,
                    link: 'https://fast-wildwood-12677.herokuapp.com/#/',
                    selected: true
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;

            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item = {item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })

    }

render() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
            {this.makeItems(this.state.items)}

            </Row>
        </Container>
    )
}

}

export default Carousel; 