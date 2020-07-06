import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputSubmit = this.onInputSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({
            term: e.target.value
        });
    }

    onInputSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }

    render() {
        return(
            <form className="input-group" onSubmit={this.onInputSubmit}>
                <input placeholder="Your City"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">Submit</button>
                </span> 
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);