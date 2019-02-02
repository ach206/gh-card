import React, { Component } from 'react';

class InfoCard extends Component {
    state = {

    }
    render() {
        return (
            <div className="infoCard">
                <p>User: {this.props.name} </p>
                {/* <p>User: {this.props.currentUser}</p> */}
                <p>Location: {this.props.location}</p>
                <p>Repos: {this.props.repos}</p>
            </div>
        );
    }
}
InfoCard.defaultProps = {
    name: 'The Octocat',
    location: 'San Francisco',
    repos: 8
};

export default InfoCard;