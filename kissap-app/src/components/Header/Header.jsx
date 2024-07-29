import React from 'react'


import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0va-Y5gI_CwfAIlHes8kpl0pa_H5A1eAwYlRLivX-LiFpwQHA4VC0adh1Ng1ZDvLETII&usqp=CAU"
                            className=" h-12"
                            alt="Logo"
                        />
                        <div className='font-sans text-5xl font-bold'>IdeationLab </div>
                        <div className='mt-9 ml-4 text-sm font-bold'>Where Ideas Meets Reality </div>
                    </Link>
                    
                    
                    <div className="flex items-center lg:order-2">
                       
                        <Link
                            to="#"
                            className="text-white bg-gray-700 hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            about us
                        </Link>
                    </div>
                    
                </div>
                
            </nav>
            
        </header>
    );
}
