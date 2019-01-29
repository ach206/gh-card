import React, { Component } from 'react';
import Search from './Search.js';
class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <Search />
            </div>
        );
    }
}

export default Card;