import React, {Component} from 'react';

import {data} from '../../data';
import GalleryList from './GalleryList';

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            gallery: data.page.collections.goods,
            filters: data.page.collections.filters,
            activeFilter: {}
        };

    }

    componentWillMount() {
        this.setState({
            gallery: this.state.gallery,
            filters: this.state.filters
        })
    }

    toggleActiveFilter = (filterType) => {
        let status = {[filterType]: true};

        if (filterType === 'all') status = {};

        this.setState({activeFilter: status});
    };

    filterGalleryItems = (e) => {
        let filterList = data.page.collections.goods,
            filterType = e.target.getAttribute('data-filter-type'),
            objState = {};


        if (filterType === 'all') {
            objState = data.page.collections.goods;
        } else {
            filterList = Object.keys(filterList).filter(item => filterList[item].filter_type === filterType);

            for (let i = 0; i < filterList.length; i++) {
                objState[i] = data.page.collections.goods[filterList[i]]
            }
        }

        this.setState({
            gallery: objState
        })
    };

    render() {

        let filterList = Object.keys(this.state.filters).map((item, i) => {
            let filterType = this.state.filters[item].link,
                activeClass = this.state.activeFilter[filterType] ? '_active' : '',
                classList = `gallery__filter-item ${activeClass}`;

            // If filter not selected not showing button 'all'
            if (filterType === 'all' && !Object.keys(this.state.activeFilter).length) return false;

            return (
                <li
                    onClick={e => {
                        this.filterGalleryItems(e);
                        this.toggleActiveFilter(filterType);
                    }}
                    className={classList}
                    key={i}
                    data-filter-type={filterType}>
                    {this.state.filters[item].name}
                </li>
            )
        });

        return (
            <main className="gallery">
                <div className="container">
                    <div className="gallery__inner">
                        <ul className="gallery__filter">
                            {filterList}
                        </ul>
                        <GalleryList gallery={this.state.gallery}/>
                    </div>
                </div>
            </main>
        )
    }
}