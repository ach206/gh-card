import React, { Component } from 'react';
import Search from './Search.js';
import AvatarCntr from './AvatarCntr.js';
class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <Search />
                <AvatarCntr />
            </div>
        );
    }
}

export default Card;