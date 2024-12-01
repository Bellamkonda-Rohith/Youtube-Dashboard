import React from 'react';

import studio from '../Navbar/youtube studio logo.png'
import '../Navbar/Navbar.css'
import chat from '../Navbar/chat-left-text-fill.svg'
import question from '../Navbar/question-diamond-fill.svg'
import vedioicon from '../Navbar/video-camera.png'
import shivaanna from '../Navbar/shiva anna.jpg'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={studio} className='custom-image-width ms-auto' alt="Studio" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <input type='text' placeholder='Search across your channel' className='custom-input text-center ms-auto' />
                        <ul className="navbar-nav ms-auto custom-li">
                            <li>
                                <a href="#"><button className='rounded'><img src={chat} className='custom-button-img' alt="Chat" /></button></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><button className='custom-button'><img src={question} className='custom-button-img' alt="Question" /></button></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><button className='custom-button'><img src={vedioicon} className='custom-button-img' alt="Video Icon" /><strong>Create</strong></button></a>
                            </li>
                            <li className="nav-item">
                                <a href="#"><button className='custom-button bg-dark'><img src={shivaanna} className='custom-button-shivaimg' alt="Shiva Anna" /></button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
