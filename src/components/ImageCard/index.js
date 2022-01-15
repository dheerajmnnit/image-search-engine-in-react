import React from 'react';
import './style.css';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render() {
        const { urls, description } = this.props.image;
        return (
            <div className='image-card' >
                <img ref={this.imageRef}
                    src={urls.regular}
                    alt={description} />
            </div>
        );
    }
}

export default ImageCard;