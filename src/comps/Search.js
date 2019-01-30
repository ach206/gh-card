import React, { Component } from 'react';
import { debounce } from "debounce";


class Search extends Component {
state = {
    query: '',
}
componentDidMount() {
    this.searchQuery = debounce(this.searchQuery, 2000)
}
searchQuery = (q) => {
    if(q){
        this.setState({query: q});
        //get results from api
        //then send result to CB function 
        this.props.updateUser(q)
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