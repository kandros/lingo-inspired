import React, {Component, PropTypes} from 'react';
import Card, {CardShape} from './Card';
import './CardGrid.css';

class CardGrid extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(CardShape)
    }
    
    render() {
        return (
            <ul className="cards-grid">
                {this.props.items.map(Card)}
            </ul>
        )
    }
}

export default CardGrid;