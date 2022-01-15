import React from 'react';
import Unsplash from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { connect } from "react-redux";

import {
    setUnsplashImages
} from "./reducers/images/action";

import './App.css';


class App extends React.Component {

    onSearchSubmit = async term => {
        const response = await Unsplash.get('search/photos/', {
            params: { query: term }
        });
        this.props.setUnsplashImages(response.data.results)
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.props.images} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.UnsplashImages.images
    };
};

export default connect(mapStateToProps, {
    setUnsplashImages
})((App));