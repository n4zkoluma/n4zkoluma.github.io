import React from "react";
import CustomImage from "../../Utils/customImage";
import image_1 from "../../../images/black-hole.png";
import image_2 from "../../../images/shark-in-space.png";
import image_3 from "../../../images/planets.png";
import image_4 from "../../../images/earth-moon.png";
import './FeaturedNewsSection.css';
import {Link} from "react-router-dom";

class FeaturedNewsSection extends React.Component {
    render() {
        return (
            <div id={'featured-news'}>
                <h1>Головні новини</h1>
                <div id={'featuredNewsSection'}>
                    <div className={'featuredNewsDiv'} id={'featuredNewsDiv1'}>
                        <div className={'featuredNewsSectionArticle'}>
                            <Link to={'/articles/BlackHole'}>
                                <CustomImage $imageSrc={image_1} $imageAlt={''} $id={'img1'}/>
                                <figcaption>Вчені знайшли найстарішу чорну діру</figcaption>
                            </Link>
                        </div>
                    </div>

                    <div className={'featuredNewsDiv'} id={'featuredNewsDiv2'}>
                        <div className={'featuredNewsSectionArticle'}>
                            <Link to={'/articles/SpaceSharks'}>
                                <CustomImage $imageSrc={image_2} $imageAlt={''} $id={'img2'}/>
                                <figcaption>Акули облетіли Чумацький Шлях двічі</figcaption>
                            </Link>
                        </div>
                    </div>
                    <div className={'featuredNewsDiv'} id={'featuredNewsDiv3'}>
                        <div className={'featuredNewsSectionArticle'}>
                            <Link to={'/articles/PlanetsSolarYears'}>
                                <CustomImage $imageSrc={image_3} $imageAlt={''} $id={'img3'} />
                                <figcaption>Тривалість року на планетах</figcaption>
                            </Link>
                        </div>
                        <div className={'featuredNewsSectionArticle'} id={'featuredNewsDiv4'}>
                            <Link to={'/articles/WaterOnTheMoon'}>
                                <CustomImage $imageSrc={image_4} $imageAlt={''} $id={'img4'}/>
                                <figcaption>Земля сприяє утворенню<br/>води на Місяці</figcaption>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        )

    }
}

export default FeaturedNewsSection;