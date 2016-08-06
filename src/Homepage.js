import React, {Component, PropTypes} from 'react';
import CardGrid from './CardGrid';
import Heading from './Heading';

const items = []
for (let i = 1; i < 14; i++) items.push({
    id: String(i),
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
                         description="Ready-to-use assets to help you kick-start your next project, all in one place."
                />
                <CardGrid items={items}/>
            </div>
        )
    }
}

export default Homepage;