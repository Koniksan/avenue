import React from 'react';
import ReactDOM from 'react-dom';

import Intro from './Intro';

let root = document.getElementById('intro');

root ? ReactDOM.render(<Intro/>, root) : false;