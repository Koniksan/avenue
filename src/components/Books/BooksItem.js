import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class BooksItem extends Component {
    render() {
        return (
            <li className='books__item'>
                <div className="books__item-inner">
                    <h2 className="books__item-name">{ReactHtmlParser(this.props.name)}</h2>
                    <p className="books__item-desc">{this.props.description}</p>
                    <a href={this.props.link} className="books__item-link">View now</a>
                </div>
                <img src={this.props.picture} alt="" className="books__item-img"/>
            </li>
        )
    }
}