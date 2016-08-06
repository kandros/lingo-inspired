import React, {PropTypes} from 'react';
import './Card.css';

export const CardShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    url: PropTypes.string
});

const Card = ({id, image, title, creator, url, onClick}) => (
    <li key={id} className="card" onClick={onClick}>
        <div className="card-image-container">
            <img
                src={image}
                alt=""/>
        </div>
        <div className="card-bottom-info">
            <h2 className="card-title">{title}</h2>
            <div className="card-creator">{creator}</div>
        </div>
    </li>
)

Card.propTypes = CardShape;

export default Card;