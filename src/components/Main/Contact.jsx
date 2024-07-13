import React, { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center bg-home-bg bg-cover bg-center bg-opacity-20">
            <div className="flex flex-col md:flex-row min-h-screen space-y-6 md:space-y-0 md:space-x-6 md:p-32 p-10 bg-black bg-opacity-40">
                <div className="text-gray-50 flex flex-col md:w-1/2 w-auto">
                    <h1 className="lg:text-5xl text-3xl font-bold mt-16 text-center md:mt-0">Contact</h1>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                                Name 
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formState.name}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-300 text-black"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-300 text-black"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formState.message}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-300 text-black"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2  p-5 md:p-10 shadow-md shadow-black rounded-md  text-white">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <p className="mb-4">
                        Feel free to reach out to me via the form or directly through the following contact details.
                    </p>
                    <p className="mb-2">
                        <strong>Email:</strong> v.murali1818@gmail.com
                    </p>
                    <p className="mb-2">
                        <strong>Phone:</strong> +91 9585024206
                    </p>
                    <p>
                        <strong>Address:</strong> No.26,Maariyamman kovil street,K.Pudhur,Thirupeyar post,Perambalur District,Tamil Nadu,621107.
                    </p>
                </div>
            </div>
        </div>
    );
}
