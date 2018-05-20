import React from 'react';
import ReactDOM from 'react-dom';

import Books from './Books';

let root = document.getElementById('books');

root ? ReactDOM.render(<Books/>, root) : false;