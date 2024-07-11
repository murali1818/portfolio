import React from 'react';

export default function Skills() {
    return (
        <div className="min-h-screen flex flex-col justify-center bg-home-bg bg-cover bg-center bg-opacity-20">
            <div className="flex flex-col md:flex-row min-h-screen space-y-6 md:space-y-0 md:space-x-6 md:p-32 p-10 bg-black bg-opacity-40">
                <div className="text-gray-50 flex flex-col md:w-1/2 w-auto">
                    <h1 className="lg:text-5xl text-3xl font-bold mt-16 md:mt-0">Skills</h1>

                    {/* Java */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span>Java</span>
                            <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                            <div className="bg-blue-500 h-2 md:h-4 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>

                    {/* HTML */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span>HTML</span>
                            <span>70%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                            <div className="bg-blue-500 h-2 md:h-4 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span>CSS</span>
                            <span>50%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                            <div className="bg-blue-500 h-2 md:h-4 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span>JavaScript</span>
                            <span>65%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                            <div className="bg-blue-500 h-2 md:h-4 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>

                    {/* React.js */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span>React.js</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                            <div className="bg-blue-500 h-2 md:h-4 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>

                    {/* Node.js */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span>Node.js</span>
                            <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                            <div className="bg-blue-500 h-2 md:h-4 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span>MongoDB</span>
                            <span>70%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 md:h-4">
                            <div className="bg-blue-500 h-2 md:h-4 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                </div>

                {/* Logos Section */}
                <div className="grid grid-cols-3 gap-5 md:grid-cols-3 md:w-1/2 p-5 shadow-md shadow-black rounded-md">
                    {/* Java Logo */}
                    <div className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                        <img
                            src="/images/java-logo.png"
                            alt="Java logo"
                            className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                        />
                        <p>Java</p>
                    </div>

                    {/* HTML Logo */}
                    <div className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                        <img
                            src="/images/html-logo.png"
                            alt="HTML logo"
                            className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                        />
                        <p>HTML</p>
                    </div>

                    {/* CSS Logo */}
                    <div className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                        <img
                            src="/images/css-logo.png"
                            alt="CSS logo"
                            className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                        />
                        <p>CSS</p>
                    </div>

                    {/* JavaScript Logo */}
                    <div className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                        <img
                            src="/images/js-logo.png"
                            alt="JavaScript logo"
                            className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                        />
                        <p>JavaScript</p>
                    </div>

                    {/* React.js Logo */}
                    <div className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                        <img
                            src="/images/react-logo.png"
                            alt="React.js logo"
                            className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                        />
                        <p>React.js</p>
                    </div>

                    {/* Node.js Logo */}
                    <div className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                        <img
                            src="/images/node-logo.png"
                            alt="Node.js logo"
                            className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                        />
                        <p>Node.js</p>
                    </div>

                    {/* MongoDB Logo */}
                    <div className="flex flex-col items-center text-center shadow-md shadow-black rounded-md text-white hover:bg-black hover:bg-opacity-20">
                        <img
                            src="/images/mongodb-logo.png"
                            alt="MongoDB logo"
                            className="w-10 rounded-md h-10 md:w-24 md:h-24 mb-2"
                        />
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
