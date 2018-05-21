import React, { Component } from 'react';

export default class GalleryList extends Component {
    render() {

        let galleryList = Object.keys(this.props.gallery).map((item, i) => {

            let sale = this.props.gallery[item].sale,
                desc = this.props.gallery[item].description;

            return (
                <li className="gallery__item" key={i} onClick={this.showOnlySale}>
                    <div className="gallery__item-price">
                        { sale ?  <span className="gallery__item-price-sale"><sup>&#163;</sup>{sale}</span>: ''}
                        <span className="gallery__item-price-current"><sup>&#163;</sup>{this.props.gallery[item].price}</span>
                    </div>
                    <img src={this.props.gallery[item].picture} alt="" className="gallery__item-img"/>
                    <div className="gallery__item-desc">
                        <h3 className="gallery__item-desc-title">{this.props.gallery[item].name}</h3>
                        { desc ? <p className="gallery__item-desc-text">{desc}</p>: ''}
                    </div>
                </li>
            )
        });

        return(
            <ul className="gallery__list">
                { galleryList }
            </ul>
        )
    }
}