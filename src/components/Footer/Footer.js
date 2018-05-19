import React, {Component} from 'react';
import {data} from '../../data';

import FooterNav from './FooterNav';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
               <div className="footer__top">
                   <div className="footer__top-inner container">
                       <FooterNav nav={data.page.footer.menu} />
                       <div className="footer__contacts">
                           <a href={data.page.footer.contacts.head.link} className="footer__contacts-title">{data.page.footer.contacts.head.name}</a>
                           <div className="footer__contacts-row">
                               <span className="footer__contacts-row-text">{data.page.footer.contacts.body.location}</span>
                           </div>
                           <div className="footer__contacts-row">
                               <span className="footer__contacts-row-text">Telephone:</span>
                               <a href={'tel:' + data.page.footer.contacts.body.phone} className="footer__contacts-row-link">{data.page.footer.contacts.body.phone}</a>
                           </div>
                           <div className="footer__contacts-row">
                               <span className="footer__contacts-row-text">Email:</span>
                               <a href={'mailto:' + data.page.footer.contacts.body.mail} className="footer__contacts-row-link">{data.page.footer.contacts.body.mail}</a>
                           </div>
                       </div>
                   </div>
               </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-inner container">
                        <div className="footer__copyright">{data.page.footer.copyright}</div>
                        <div className="footer__bottom-left">
                            <div className="footer__design">{data.page.footer.design}</div>
                            <div className="footer__develop">{data.page.footer.developers}</div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}