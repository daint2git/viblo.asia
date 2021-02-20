import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Lấy state từ một biến global được đưa vào HTML do server tạo
const initialState = window.APP_STATE;

ReactDOM.hydrate(<App {...initialState} />, document.getElementById('app'));
