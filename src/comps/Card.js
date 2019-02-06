import React, { Component } from 'react';
import Search from './Search.js';
import AvatarCntr from './AvatarCntr.js';
import InfoCard from './InfoCard.js';
import * as GhAPI from '../data/ghAPI.js';


class Card extends Component {

    state = {
        currentUser: 'octocat',
        name: 'The Octocat',
        location: 'San Francisco',
        repos: 8,
        avatar: 'https://avatars3.githubusercontent.com/u/583231?v=4'
    }

    updateUserData = (q) => {
        let result = [];
        let fResult = [];
        let login = "";
        let validQ = this.checkForNullSpace(q);
        if (validQ === false ){

            GhAPI.searchUsers(q).then((res) => {
                result = res.items;
                if (res.total_count === 0) {
                    this.setState({
                        currentUser: 'octocat',
                        name: 'The Octocat',
                        location: 'San Francisco',
                        repos: 8,
                        avatar: 'https://avatars3.githubusercontent.com/u/583231?v=4'
                    })
                }
                else {
                    fResult = result[0]
                    login = fResult.login
                    this.getUserInfo(login)
                }

            })
            this.setState({currentUser: q})
        } else {
            this.setState({
                currentUser: 'octocat',
                name: 'The Octocat',
                location: 'San Francisco',
                repos: 8,
                avatar: 'https://avatars3.githubusercontent.com/u/583231?v=4'
            })
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

    checkForNullSpace(q) {
        return (q == null || q === "" || !/\S/.test(q));
    }

    // checkfor(q) {
    //     return (q == null || !/\S/.test(q));
    // }
    
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