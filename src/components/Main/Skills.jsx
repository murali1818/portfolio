import React from 'react';
import javaLogo from '../images/java-logo.png';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import jsLogo from '../images/js-logo.png';
import reactLogo from '../images/react-logo.png';
import nodeLogo from '../images/node-logo.png';
import mongodbLogo from '../images/mongodb-logo.png';

const skills = [
    { name: 'Java', level: 85, logo: javaLogo },
    { name: 'HTML', level: 70, logo: htmlLogo },
    { name: 'CSS', level: 50, logo: cssLogo },
    { name: 'JavaScript', level: 65, logo: jsLogo },
    { name: 'React.js', level: 80, logo: reactLogo },
    { name: 'Node.js', level: 75, logo: nodeLogo },
    { name: 'MongoDB', level: 70, logo: mongodbLogo },
];

export default function Skills() {
    return (
        <div className="min-h-screen flex flex-col justify-center bg-home-bg bg-cover bg-center bg-opacity-20">
            <div className="flex flex-col md:flex-row min-h-screen space-y-6 md:space-y-0 md:space-x-6 md:p-32 p-10 bg-black bg-opacity-40">
                <div className="text-gray-50 flex flex-col md:w-1/2 w-auto">
                    <h1 className="lg:text-5xl text-3xl font-bold mt-16 md:mt-0">Skills</h1>
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-2 md:mb-4">
                            <div className="flex justify-between mb-0">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                                <div
                                    className="bg-blue-500 h-2 md:h-4 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-5 md:grid-cols-3 md:w-1/2 p-5 shadow-md shadow-black rounded-md">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                            <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                            />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
