import React, { Component } from 'react';

// const Component = React.Component;

class SearchBar  extends Component{
    render() {
        return <input  onChange={this.onInputChange} />;
        // Use method or arrow function like this:
        // return <input  onChange={event => console.log(event.target.value)} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;