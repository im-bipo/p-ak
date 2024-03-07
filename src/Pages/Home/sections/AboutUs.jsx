import React from 'react'
import ankitPic from '../../../assets/images/myimage.jpg'

const AboutUs = () => {
    return (
        <section className="bg-[#151515] text-white">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 flex justify-center object-contain">
                        <img
                            className="w-[80%] lg:h-[30rem] object-cover rounded-md object-aboutUsImg"
                            src={ankitPic}
                            alt=""
                        />
                    </div>
                    <div className="w-full lg:w-1/2 py-10 md:pr-20">
                        <h3 className="font-bold text-2xl">About Me</h3>
                        <h5 className="mt-2 mb-5">
                            Developer
                            <span className="px-1 text-action">& Designer</span>
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deserunt distinctio impedit dolor suscipit
                            dolores officia earum qui voluptatibus odit vitae
                            molestias quo, recusandae, animi est. Quisquam
                            dolores omnis iure ea adipisci sint! Quasi tenetur,
                            illo placeat quae distinctio rem aspernatur quaerat
                            sint recusandae consectetur perspiciatis molestias
                            fugiat, iste quis minima quas, dolorem doloribus
                            earum consequatur ullam veniam porro! Ut nisi id
                            libero cumque, pariatur aperiam! Inventore nisi
                            fugiat dolorem et a est doloremque cumque iusto
                            nulla commodi animi architecto vitae dolorum
                            mollitia molestiae, qui nobis numquam earum unde
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
