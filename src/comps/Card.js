import React, { Component } from 'react';
import Search from './Search.js';
import AvatarCntr from './AvatarCntr.js';
import InfoCard from './InfoCard.js';


class Card extends Component {

    state= {
        currentUser: '',
    }

    updateUserData = (q) => {
        //sets currentUser based off search results
    }
    render() {
        return (
            <div className="card-container">
                <Search 
                updateUser={this.updateUserData}/>
                <AvatarCntr />
                <InfoCard />
            </div>
        );
    }
}

export default Card;