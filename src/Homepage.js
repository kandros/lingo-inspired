import React, {Component, PropTypes} from 'react';
import CardGrid from './CardGrid';
import Heading from './Heading';

const items = []
for (let i = 1; i < 14; i++) items.push({
    id: i,
    title: 'Maki Map Icons',
    creator: 'created by Mapbox',
    image: 'https://lingo-production.s3.amazonaws.com/marketplace/2CB3BA78-76D1-4CCD-887F-53D81ADF8E5B/cover/1.png',
    link: ''
});

class Homepage extends Component {
    
    render() {
        return (
            <div className="container">
                <br/><br/><br/><br/><br/>
                
                <Heading title="ReactJS cards grid"
                         description="Lingo inspired designs built at arnold coffee on a normal saturday because why not?"
                />
                <CardGrid items={items}/>
            </div>
        )
    }
}

export default Homepage;