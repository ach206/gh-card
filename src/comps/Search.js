import React, { Component } from 'react';
import { debounce } from "debounce";


class Search extends Component {
state = {
    query: '',
}
componentDidMount() {
    this.fetchUsers = debounce(this.fetchUsers, 2000)
}
searchQuery = (q) => {
    if(q){
        this.setState({query: q});
        //get results from api
        //then send result to CB function 
        this.fetchUsers(q)
    } else {
        this.setState({query: ''});
        this.props.updateUser(null)
    }
}
fetchUsers = (q) => {
    this.props.updateUser(q)
}
    render() {
        return (
            <div className="search">
            
                <input 
                className="searchInput"
                type="text" 
                name="search-box"
                value={this.state.query}
                onChange={(e) => {this.searchQuery(e.target.value)}}
                placeholder="Search User">
                </input>
            </div>
        );
    }
}

export default Search;