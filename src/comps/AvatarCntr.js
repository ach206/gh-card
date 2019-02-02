import React, { Component } from 'react';

class AvatarCntr extends Component {
    render() {
        return (
            <div className="avatar">
                <img src={this.props.avatar} alt={this.props.name} />
            </div>
        );
    }
}
AvatarCntr.defaultProps = {
    avatar: "https://avatars3.githubusercontent.com/u/583231?v=4"

};
export default AvatarCntr;