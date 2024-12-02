import React from 'react'
import logo from '/workspaces/ipo-web-app/bluestock-assets/other item uploading soon/logo_min.png'
function Header() {
    return (
    <header className=' bg-white-400 shadow-sm'>
     <div className=" container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={logo} alt="Bluestock logo" className="h-20 " />
                            <span className=" text-2xl font-bold text-gray-900 flex items-center">BLUESTOCK</span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-500 hover:text-gray-900">PRODUCTS</a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">COMMUNITY</a>
                            <div className="relative">
                                <button className="text-gray-500 hover:text-gray-900 flex items-center">
                                    MEDIA <i className="fas fa-chevron-down ml-1"></i>
                                </button>
                            </div>
                            <a href="#" className="text-gray-500 hover:text-gray-900">SUPPORT <i className="fas fa-external-link-alt"></i></a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 flex items-center">
                                LIVE NEWS <span className="ml-1 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
                            </a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-500 hover:text-gray-900">Sign In</a>
                            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up Now</a>
                            <button className="text-gray-500 hover:text-gray-900 md:hidden">
                                <i className="fas fa-th"></i>
                            </button>
                        </div>
                    </div>
    </header>
    )
}

export default Header
