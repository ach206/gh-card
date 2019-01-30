import React, { Component } from 'react';

class InfoCard extends Component {
    state = {

    }
    render() {
        return (
            <div className="infoCard">
                <p>User: James Bodwin </p>
                {/* <p>User: {this.props.currentUser}</p> */}
                <p>Location: Seattle, WA</p>
                <p>Repos: 22</p>
            </div>
        );
    }
}

export default InfoCard;