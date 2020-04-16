import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import '../footerStyle.css';

export default function SocialFollow() {
    return (
        <div className='social-container'>
        
            <a 
            href='https://www.linkedin.com/in/grant-kyle-53298711a/'
            className='linkedin social'
            >
            <FaLinkedin size="2rem" icon={FaLinkedin}/>
            </a>
            <a 
            href='https://github.com/grantkyle'
            className='github social'
            >
            <FaGithub size="2rem" icon={FaGithub}/>
            </a>
        </div>
    )
}