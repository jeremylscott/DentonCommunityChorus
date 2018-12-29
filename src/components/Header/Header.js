import React from 'react'
import '/header.css'
import DCC_Header from '../images/DCC_Header.png'

export default function Header() {

    return (
        <div>
            <img src={DCC_Header} className='headerMain'/>
        </div>
    )
}