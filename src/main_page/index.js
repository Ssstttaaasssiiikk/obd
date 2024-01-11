import React from "react";

import Header from '../components/header/header';
import Footer from "../components/footer/footer";

import './style.css';

function MainPage(){
    return(
        <div>
            <Header/>
            <div className="o-nas">
                <span className="o-nas">
                    Мы предлагаем инновационные решения для печати брендов на различной продукции, помогая компаниям выделиться и оставить 
                    свой неповторимый след. Наши профессионалы объединяют техническое мастерство с творческим подходом, обеспечивая высококачественную и стильную печать. 
                </span>
            </div>
            <Footer/>
        </div>
    );
}

export default MainPage;