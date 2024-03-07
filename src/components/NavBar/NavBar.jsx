import React, { useEffect, useState } from 'react'
import { navMenu } from '../../assets/db/data.js'
// This component's css is writtent in vanilla css

import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    //add or remove ham menu with css class
    const handleHam = () => {
        document.getElementById('nav').classList.toggle('expendedNav')
    }

    // handle nav remove without x
    let remove = true
    const NavBox = () => {
        remove = false
    }
    const BodyBox = () => {
        if (remove) {
            handleHam()
        }
        remove = true
    }

    //nav background switch
    const [Navstatus, setNavstatus] = useState('')

    window.onscroll = () => {
        if (window.scrollY < 20) {
            setNavstatus('no-bg')
        } else {
            setNavstatus('solid-bg')
        }
    }

    useEffect(() => {
        if (Navstatus === 'no-bg') {
            document.getElementById('nav').classList.remove('solid-background')
        } else if (Navstatus === 'solid-bg') {
            document.getElementById('nav').classList.add('solid-background')
        }
    }, [Navstatus])

    return (
        <nav className="nav" id="nav">
            <h1 className="Logo">ANKITA</h1>
            <div id="NavLists" className="NavLists " onClick={() => BodyBox()}>
                <div className="Lists-container" onClick={() => NavBox()}>
                    <ul className="Lists">
                        {navMenu.map((list) => (
                            <li className="list" key={list.id}>
                                <Link to={list.path} onClick={handleHam}>
                                    {list.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="en-btn">
                <div className="Contact-btn">
                    <button className="btn">
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
                <div id="ham-menu" className="ham-menu" onClick={handleHam}>
                    <div className="ham-bar ham-bar-1"></div>
                    <div className="ham-bar ham-bar-2"></div>
                    <div className="ham-bar ham-bar-3"></div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
