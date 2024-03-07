import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutUs from './sections/AboutUs'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import ContactForm from './sections/ContactForm'

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Skills />
            <Projects />
            <ContactForm />
        </>
    )
}

export default Home
