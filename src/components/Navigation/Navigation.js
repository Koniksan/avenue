import React, { Component } from 'react';

import NavigationItem from './NavigationItem';

export default class Navigation extends Component {
    render() {

        const navList = Object.keys(this.props.list).map((item, i) =>
            <NavigationItem
                link={this.props.list[item].link}
                name={this.props.list[item].name}
                key={i}
            />
        );

        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    { navList }
                </ul>
            </nav>
        )
    }
}