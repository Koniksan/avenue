import React, { Component } from 'react';

import NavigationItem from './NavigationItem';

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            activeMenu: false
        }
    }

    toggleNav = () => {
        this.setState({
            activeMenu: !this.state.activeMenu
        })
    };

    render() {

        const navList = Object.keys(this.props.list).map((item, i) =>
            <NavigationItem
                link={this.props.list[item].link}
                name={this.props.list[item].name}
                key={i}
            />
        );

        const activeClass = this.state.activeMenu ? '_active': '';
        const classListNav = `navigation__list ${activeClass}`;
        const classListBtn = `navigation__mobile-btn ${activeClass}`;

        return (
            <nav className="navigation">
                <ul className={classListNav}>
                    { navList }
                </ul>
                <button type="button" onClick={() => this.toggleNav()} className={classListBtn}>
                    <span className="navigation__mobile-btn-item _1"/>
                    <span className="navigation__mobile-btn-item _2"/>
                    <span className="navigation__mobile-btn-item _3"/>
                </button>
            </nav>
        )
    }
}