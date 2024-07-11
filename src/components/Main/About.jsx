import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-about-bg bg-cover bg-center bg-opacity-20">
      <div className="flex flex-col md:flex-row items-center md:justify-around min-h-screen space-y-6 md:space-y-0 md:space-x-6 md:p-20 bg-black bg-opacity-40">
        <div className="text-gray-50 flex flex-col p-10 md:w-1/2 w-auto">
          <h1 className="lg:text-5xl text-3xl font-bold mb-2 mt-10 md:mt-0">About me</h1>
          <p className="text-gray-100 md:text-lg text-sm mb-4 ">
            I am Murali a passionate MERN stack developer eager to contribute to innovative projects within a reputable organization. I am committed to continuous learning and exploring diverse opportunities to enhance my expertise in web development.
          </p>
          <p className="text-gray-100 md:text-lg text-sm ">
            Currently pursuing my BE in Computer Science and Engineering at Karpagam Institute of Technology, I have gained substantial skills in both front-end and back-end development through various internships and projects.
          </p>
        </div>
        <div className=" rounded-lg overflow-hidden shadow-2xl shadow-gray-500 ">
          <img src="./images/about-img.jpg" alt="Profile" className="lg:w-96 h-auto w-64" />
        </div>
      </div>
    </div>
  );
}
