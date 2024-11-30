import React from 'react';

import studio from '../Navbar/youtube studio logo.png'
import '../Navbar/Navbar.css'
import chat from '../Navbar/chat.png'
import question from '../Navbar/question.png'
import vedioicon from '../Navbar/video-camera.png'
import shivaanna from '../Navbar/shiva anna.jpg'
const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={studio} className='custom-image-width ms-auto' /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <input type='text' placeholder='Search accross your chanel' className='custom-input text-center ms-auto ' />

                        <ul class="navbar-nav  ms-auto custom-li">
                            <li >
                                <a href="#"><button className='custom-button '><img src={chat} className='custom-button-img' /></button></a>
                            </li>
                            <li class="nav-item">
                                <a href="#"><button className='custom-button '><img src={question} className='custom-button-img' /></button></a>
                            </li>
                            <li class="nav-item">
                                <a href="#"><button className='custom-button '><img src={vedioicon} className='custom-button-img' />  <strong>Create</strong></button></a>
                            </li>
                            <li class="nav-item">
                                <a href="#"><button className='custom-button bg-dark'><img src={shivaanna} className='custom-button-shivaimg' /> </button></a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


        </>
    );

};
export default Navbar;

