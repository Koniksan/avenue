import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { data } from '../../data';

import Navigation from '../Navigation/Navigation';
import PromoSlider from '../Promo-slider/PromoSlider';

export default class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div className="intro__inner container">
                    <header className='intro__header'>
                        <a href="/" className="intro__header-logo"><b className='intro__header-logo-bold'>avenue</b> fashion</a>
                        <Navigation list={data.page.header.menu}/>
                    </header>
                </div>
                <PromoSlider gallery={data.page.intro.gallery}/>
            </div>
        )
    }
}