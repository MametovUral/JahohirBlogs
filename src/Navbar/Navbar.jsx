import React from 'react';
import "./Navbar.css"
const Navbar = () => (
    <div>
        <nav>
            <article style={{color: 'white'}}>J</article>
            <ul>
                <li>Info</li>
                <li>Skill</li>
                <li>Template work</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button className='send-btn'><p>Send Message</p></button>
        </nav>
    </div>
);


export default Navbar;