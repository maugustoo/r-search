import React, { Component } from 'react';

// const Component = React.Component;

class SearchBar  extends Component{
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        // Use method or arrow function like this:
        return (
            <div className="search-bar">
                <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;