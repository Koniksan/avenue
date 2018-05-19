import React, {Component} from 'react';
import {config} from '../../config/config';

export default class PromoSliderItem extends Component {
    render() {

        let title = this.props.title.split('').map((item, i) => {
            if (i >= config.promoTitleWordCount) return;
            return <span className="promo-slider__item-title-item" key={i}>{item}</span>
        });

        return (
            <div className="promo-slider__item">
                <img src={this.props.imgPath} alt="" className="promo-slider__item-img"/>
                <h2 className="promo-slider__item-title">
                    {title}
                </h2>
            </div>
        )
    };
}