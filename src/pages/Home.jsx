import React from "react"
import Header from '../components/Header.jsx'
const Home = () => {
    return (
        <>
            <Header />
                <main className="p-4 min-h-screen bg-gray-950 text-white scroll-smooth ">
                    <h2 className=" font-extrabold text-transparent bg-clip-text text-3xl md:text-4xl mb-4 bg-gradient-to-r from-slate-200/60 to-70% to-slate-200">Welcome to SubWise</h2>
                    <p className="text-indigo-500 inline-flex flex-col font-semibold"> Track every movement of your money</p>
                </main>
        </>
    );
};

export default Home;