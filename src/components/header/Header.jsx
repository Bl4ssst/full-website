import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>React</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src='https://assets.churchofjesuschrist.org/28/fe/28fe83d5e7705d0e0a43aa8ccc8aec19f15cb5d3/sunrise_flowers.jpeg' alt=''/>
        </div>
    )
}