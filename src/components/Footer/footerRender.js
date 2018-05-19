import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';

let root = document.getElementById('footer');

root ? ReactDOM.render(<Footer/>, root) : false;