import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center bg-home-bg bg-cover bg-center bg-opacity-20 ">
            <div className="flex flex-col md:flex-row items-center md:justify-around min-h-screen space-y-6 md:space-y-0 md:space-x-6 p-10 bg-black bg-opacity-40">
                <div className="rounded-lg overflow-hidden shadow-2xl shadow-black mt-16">
                    <img src="./images/pic.jpg" alt="Profile" className="w-64 h-auto lg:w-96" />
                </div>
                <div className=" text-gray-50  flex flex-col items-center  md:items-start p-10">
                    <h1 className="lg:text-5xl text-4xl font-bold mb-2">Hi, I'm Murali</h1>
                    <p className="lg:text-2xl text-xl text-center md:text-start mb-4 "> MERN stack developer and UI&UX designer
                    </p>
                    <div className="flex space-x-6 mb-4">
                        <a href="https://github.com/murali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/murali1818_vk/" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/murali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://twitter.com/VMurali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://facebook.com/murali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                    <a href="/MURALI V RESUME.pdf" download="Murali_Resume.pdf" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-md shadow-lg flex items-center">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                        Download Resume
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Home;
