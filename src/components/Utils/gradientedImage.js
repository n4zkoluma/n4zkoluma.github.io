import React from "react";


class GradientImage extends React.Component {

    render() {
        return (
            <img src={this.props.imageSrc} alt={this.props.imageAlt} id={this.props.id}/>
        );
    }

}

export default GradientImage;