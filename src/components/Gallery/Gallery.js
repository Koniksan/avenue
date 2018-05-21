import React, {Component} from 'react';

import {data} from '../../data';
import GalleryList from './GalleryList';

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            gallery: data.page.collections.goods,
            filters: data.page.collections.filters
        }
    }

    componentWillMount(){
        this.setState({
            gallery: this.state.gallery,
            filters: this.state.filters
        })
    }

    filterGalleryItems = (e) => {
        let filterList = data.page.collections.goods,
            filterType = e.target.getAttribute('data-filter-type'),
            objState = {};

        filterList = Object.keys(filterList).filter(item => filterList[item].filter_type === filterType);

        for (let i = 0; i < filterList.length; i++) {
            objState[i] = data.page.collections.goods[filterList[i]]
        }

        this.setState({
            gallery: objState
        })
    };

    render() {

        let filterList = Object.keys(this.state.filters).map((item, i) => {
            return (
                <li
                    onClick={e => this.filterGalleryItems(e)}
                    className="gallery__filter-item" key={i}
                    data-filter-type={this.state.filters[item].link}>
                    {this.state.filters[item].name}
                </li>
            )
        });

        return (
            <main className="gallery">
                <div className="container">
                    <div className="gallery__inner">
                        <ul className="gallery__filter">
                            { filterList }
                        </ul>
                        <GalleryList gallery={this.state.gallery}/>
                    </div>
                </div>
            </main>
        )
    }
}