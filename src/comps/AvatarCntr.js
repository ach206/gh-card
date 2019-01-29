import React, { Component } from 'react';
import Octocat from '../images/GitHub-Mark.png';

class AvatarCntr extends Component {
    render() {
        return (
            <div className="avatar">
                <img src={Octocat} alt="Octocat" />
            </div>
        );
    }
}

export default AvatarCntr;