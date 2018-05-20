import React, {Component} from 'react';
import {data} from '../../data';

import BooksItem from './BooksItem';

export default class Books extends Component {
    render() {

        let booksList = Object.keys(data.page.books).map((item,i) =>
            <BooksItem
                name={data.page.books[item].name}
                description={data.page.books[item].description}
                link={data.page.books[item].link}
                picture={data.page.books[item].picture}
                key={i}
            />
        );

        return (
            <div className="books">
                <ul className="books__list">
                    {booksList}
                </ul>
            </div>
        )
    }
}