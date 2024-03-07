import React from 'react'
import heroImg from '../../../../src/assets/images/background image.jpeg'

const HeroSection = () => {
    return (
        <main className="heroImage bg-cover bg-center bg-no-repeat h-[100vh] text-white">
            <div className="container h-[100vh] flex justify-center pt-20 items-center w-full">
                <div className="text-center">
                    <h3 className="font-bold text-[1.25rem] md:text-[1.5rem]">
                        Hello, My name is
                    </h3>
                    <h2 className="font-black text-[2rem] md:text-[3rem] py-3">
                        Ankita
                        <span className="text-action"> Khatri Chhetri</span>
                    </h2>
                    <h3 className="font-bold text-[1.25rem] md:text-[1.5rem]">
                        I&apos;m a Web Developer
                    </h3>
                    <a href="../../../assets/images/portfolio.jpg" download>
                        <button className="bg-action px-5 py-[5px] mt-4 rounded-3xl hover:bg-[#3aa8c1]">
                            Resume{' '}
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </button>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default HeroSection
