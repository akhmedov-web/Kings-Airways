import React from 'react'
import langs from "../base/lang.js"
export default function Footer({lang}) {
    return (
        <footer class="text-center text-white"  style={{backgroundColor: "#232B38"}}>
            <div class="text-center p-3" style={{backgroundColor: "#2B3947"}}>
                © 2023 {langs[lang].footerText} <a href="https://t.me/akhmedov_blogs" className='text-light text-decoration-underline'>Lazy coder</a>
            </div>
        </footer>

    )
}
