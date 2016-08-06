import React, {PropTypes} from 'react';
import './Heading.css';

const Heading = ({title, description}) => (
    <div className="heading">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
    </div>
)

Heading.propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired
};

export default Heading;