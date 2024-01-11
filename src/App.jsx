import React from "react";

import MainPage from "./main_page";
import Contact from './contact-page/index';
import Order from "./order-page/index";
import Catalog from "./catalog-page/index";
import { Route, Routes } from "react-router-dom";

function App(){
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/order" element={<Order/>}/>
        </Routes>
    </>
}

export default App;