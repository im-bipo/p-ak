import React from 'react'

const ContactForm = () => {
    return (
        <section className="bg-primary text-white py-10">
            <h2 className="text-center">Contact form </h2>
            <div class="container">
                <form
                    class="max-w-md mx-auto rounded"
                    onSubmit={() => {
                        alert('Form Submited')
                    }}
                >
                    <div class="mb-4">
                        <label
                            class="block text-gray-300 text-sm font-bold mb-2"
                            for="name"
                        >
                            Name <span className="text-red-700"> *</span>
                        </label>
                        <input
                            class=" rounded w-full py-2 px-3 bg-[#303030] text-gray-100 focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-gray-300 text-sm font-bold mb-2"
                            for="name"
                        >
                            Email<span className="text-red-700"> *</span>
                        </label>
                        <input
                            class=" rounded w-full py-2 px-3 bg-[#303030] text-gray-100 focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            class="block text-gray-300 text-sm font-bold mb-2"
                            for="name"
                        >
                            Message<span className="text-red-700"> *</span>
                        </label>
                        <textarea
                            class=" rounded w-full py-2 px-3 bg-[#303030] text-gray-100 focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Your Message"
                            required
                        />
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-[#343434] hover:bg-[#3d3d3d] text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
