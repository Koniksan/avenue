import React, { Component } from 'react';

import NavigationItem from './NavigationItem';

export default class Navigation extends Component {
    render() {
        return (
            <li className="navigation__item">
                <a href={this.props.link} className="navigation__link">{this.props.name}</a>
            </li>
        )

    }
}