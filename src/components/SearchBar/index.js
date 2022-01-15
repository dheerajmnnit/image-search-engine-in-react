import React from 'react';
import './style.css';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.term) {
            this.props.onSubmit(this.state.term);
        }
    }

    onInputChange = event => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <>
                <form className="form-inline" onSubmit={this.onFormSubmit}>
                    <input className="form-control form-control-md mr-3 user-input" type="text" placeholder="Search for photos"
                        aria-label="Search" value={this.state.term} onChange={this.onInputChange} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </>
        );
    }
}

export default SearchBar;