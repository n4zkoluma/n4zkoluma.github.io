import React from "react";
import {Link} from "react-router-dom";
import './NewsArticle.css';

class NewsArticle extends React.Component {

    render() {
        return (
            <div className={'containerForContainer'}>
                <div className={'newsContainer'}>
                    <div className={'newsArticle'}>
                        <section className={'articleImage'}>
                            <img src={this.props.pathToPic} alt={this.props.$altText} style={this.props.imgStyle}/>
                        </section>
                        <section className={'articleText'}>
                            <h1 className={'articleHeader'}>{this.props.$H1Text}</h1>
                            <p className={'articleText'}>{this.props.$articleText}</p>
                            <Link to={this.props.ANCHOR} style={{fontWeight: "bold"}}>Читати...</Link>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsArticle;