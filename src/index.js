import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainPage from './main_page/index';
import Catalog from './catalog-page/index';
import Contact from './contact-page/index';
import Order from './order-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Order />
  </React.StrictMode>
);

