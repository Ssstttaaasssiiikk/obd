import React from "react";

import Header from '../components/header/header';
import Footer from "../components/footer/footer";

import './style.css';



// import MainPage from "./main_page";
import Page from "../page1";
import Contact from '../contact-page/index';
import Order from "../order-page/index";
import Catalog from "../catalog-page/index";
import { Route, Routes } from "react-router-dom";

function MainPage(){
    return(
        <>
           <Routes>
                <Route path="/" element={<Page/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </>
    );
}

export default MainPage;