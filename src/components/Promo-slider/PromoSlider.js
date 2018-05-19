import React, { Component } from 'react';
import Slider from 'react-slick';

import PromoSliderItem from './PromoSliderItem';

export default class PromoSlider extends Component {
    render() {
        let settings = {
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: false,
            draggable: false,
            fade: true,
            pauseOnHover: false,
        };

        let sliderList = Object.keys(this.props.gallery).map((item, i) =>
            <PromoSliderItem
                imgPath={this.props.gallery[item].picture}
                title={this.props.gallery[item].title}
                key={i}
            />
        );

        return (
            <div className="promo-slider">
                <Slider {...settings}>
                    { sliderList }
                </Slider>
            </div>
        );
    }
}