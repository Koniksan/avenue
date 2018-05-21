import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery'

let root = document.getElementById('gallery');

root ? ReactDOM.render(<Gallery/>, root) : false;