import React, { useState } from 'react'
import logo from '../images/logo.png';
import langs from "../base/lang.js";
export default function Navbar({lang,setLang}) {
    const [menu, setMenu] = useState(false);
    return (
        <div className='header'>
            <div className="airlines_mini_navbar d-flex justify-content-end px-3">
                <i href="#" className='discount_text text-light text-decoration-underline my-auto'>{langs[lang].message}</i>
            </div>
            <div className="airlines_navbar">
                <div className="brand" >
                    <a href="/"><img src={logo} alt="logo" className='brand' /></a>
                </div>
                <button
                    className='menu_bar d-xl-none d-lg-none d-md-block d-sm-block d-block'
                    onClick={() => setMenu(!menu)}
                >
                    <i class="fas fa-bars"></i>
                </button>
                <div className={menu?"show non-responsive_menu":"non-responsive_menu"}>
                    <a href="https://portifoliome.vercel.app" target="_blank" className='menu_text mx-3'>{langs[lang].menuText1}</a>
                    <a href="https://portifoliome.vercel.app" target="_blank" className='menu_text mx-3'>{langs[lang].menuText2}</a>
                    <select className='select_lang' onChange={(e)=>setLang(e.target.value)}>
                        <option value="eng" selected>Eng</option>
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
