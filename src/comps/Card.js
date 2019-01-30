import React, { Component } from 'react';
import Search from './Search.js';
import AvatarCntr from './AvatarCntr.js';
import InfoCard from './InfoCard.js';
import * as GhAPI from '../data/ghAPI.js';


class Card extends Component {

    state = {
        currentUser: null,
        name: '',
        location: '',
        repos: 0,
        avatar: ''
    }

    updateUserData = (q) => {
        let result = [];
        let fResult = [];
        let login = "";
        if (q != null){
            GhAPI.searchUsers(q).then((res) => {
                result = res.items;
                    if(result.length > 0){
                        fResult = result[0]
                        login = fResult.login
                        this.getUserInfo(login)
                    } else {
                        // sorry no results
                    }

            })
            this.setState({currentUser: q})
        } else {
            this.setState({currentUser: null})
        }
        //sets currentUser based off search results
    }
    getUserInfo = (login) => {
        let name = '';
        let location = '';
        let repos = 0;
        let avatar = '';
        if (login != null) {
            GhAPI.getUser(login).then((res) => {
               name = res.name
                location = res.location
                repos = res.public_repos
                avatar = res.avatar_url
                this.setState({name: name, 
                    location: location, repos: repos,
                     avatar: avatar})
            })
        }
    }
    render() {
        return (
            <div className="card-container">
                <Search 
                updateUser={this.updateUserData}/>
                <AvatarCntr {...this.state}/>
                <InfoCard {...this.state}/>
            </div>
        );
    }
}

export default Card;