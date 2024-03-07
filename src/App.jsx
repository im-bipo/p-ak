import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import About from './Pages/Other/About'
import Blog from './Pages/Other/Blog'
import Contact from './Pages/Other/Contact'
import Info from './Pages/Other/Info'

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/info" element={<Info />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
