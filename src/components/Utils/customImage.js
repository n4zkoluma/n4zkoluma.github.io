import React from "react";


class CustomImage extends React.Component {

    render() {
        return (
            <img src={this.props.$imageSrc} alt={this.props.$imageAlt} id={this.props.$id} style={this.props.$style}/>
        );
    }

}

export default CustomImage;