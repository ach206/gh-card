import React, { Component } from 'react';
import Octocat from '../images/GitHub-Mark.png';

class AvatarCntr extends Component {
    render() {
        return (
            <div className="avatar">
                <img src={this.props.avatar} alt={this.props.name} />
            </div>
        );
    }
}

export default AvatarCntr;