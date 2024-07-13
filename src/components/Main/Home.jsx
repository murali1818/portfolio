import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="min-h-screen flex flex-col justify-center bg-home-bg bg-cover bg-center bg-opacity-20">
            <motion.div
                className="flex flex-col md:flex-row items-center md:justify-around min-h-screen space-y-6 md:space-y-0 md:space-x-6 p-10 bg-black bg-opacity-40"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="rounded-lg overflow-hidden shadow-2xl shadow-black mt-16"
                    variants={itemVariants}
                >
                    <img src="./images/pic.jpg" alt="Profile" className="w-64 h-auto lg:w-96" />
                </motion.div>
                <motion.div className="text-gray-50 flex flex-col items-center md:items-start p-10" variants={itemVariants}>
                    <motion.h1 className="lg:text-5xl text-4xl font-bold mb-2" variants={itemVariants}>
                        Hi, I'm Murali
                    </motion.h1>
                    <motion.p className="lg:text-2xl text-xl text-center md:text-start mb-4" variants={itemVariants}>
                        MERN stack developer and UI&UX designer
                    </motion.p>
                    <motion.div className="flex space-x-6 mb-4" variants={itemVariants}>
                        <a href="https://github.com/murali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/murali1818_vk/" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="www.linkedin.com/in/murali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://twitter.com/VMurali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://facebook.com/murali1818" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </motion.div>
                    <motion.a
                        href="/MURALI V RESUME.pdf"
                        download="Murali_Resume.pdf"
                        className="bg-gray-100 text-gray-900 px-4 py-2 rounded-md shadow-lg flex items-center"
                        variants={itemVariants}
                    >
                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                        Download Resume
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;
