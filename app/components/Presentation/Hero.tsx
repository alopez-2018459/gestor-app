import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative dark:bg-[#100724] px-10 pb-10" id="home">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div>
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Traveling has never been so simple</h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">Log in or register to enjoy all the benefits and advantages of traveling with Roomfly, and start planning your perfect trip without complications</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <Link
                                href={"/account/login"}
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                                <span className="relative text-base font-semibold dark:text-white"
                                >Login</span
                                >
                            </Link>
                            <Link
                                href={"/account/signup"}
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                            >
                                <span
                                    className="relative text-base font-semibold text-primary dark:text-white"
                                >Register</span
                                >
                            </Link>
                        </div>
                        <div className="hidden py-8 mt-16 sm:flex justify-between">
                            <div className="text-center">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The best prices</h6>
                                <p className="mt-2 text-gray-500">Offers and discounts</p>
                            </div>
                            <div className="text-center">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Quick Attention</h6>
                                <p className="mt-2 text-gray-500">Fast and efficient customer service</p>
                            </div>
                            <div className="text-center">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Easy to use</h6>
                                <p className="mt-2 text-gray-500">Intutive Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;