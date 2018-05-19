import React, {Component} from 'react';

export default class FooterNav extends Component {

    getSubNavItems (objSubNav) {
        return Object.keys(objSubNav).map((item, i) => {
            return (
                <li className="footer__nav-sub-item" key={i}>
                    <a href={objSubNav[item].link} className="footer__nav-sub-link">{objSubNav[item].name}</a>
                </li>
            )
        })
    }

    render() {

        let navList = Object.keys(this.props.nav).map((item, i) => {
           return  (
               <li className="footer__nav-item" key={i}>
                   <ul className="footer__nav-sub-list">
                       {this.getSubNavItems(this.props.nav[item])}
                   </ul>
               </li>
           )
        });

        return (
            <ul className="footer__nav">
                { navList }
            </ul>
        )
    }
}