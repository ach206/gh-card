import React, { Component } from 'react';

class Search extends Component {
state = {
    query: '',
}

searchQuery = (q) => {
    if(q){
        this.setState({query: q});
    } else {
        this.setState({query: ''});
    }
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