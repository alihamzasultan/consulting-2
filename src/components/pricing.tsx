"use client";
import React, { useState } from "react";

;

const Pricing = () => {
    return (
        <div>


            <div className="text-center py-20">
                <h4 className="font-bold text-emerald-500">Pricing</h4>
                <h1 className="text-3xl font-bold">Get In Reasonable Price</h1>
                
            </div>

            <div className="max-w-7.5xl mx-auto grid  lg:grid-cols-4 md:grid-cols-2 gap-8 px-1 sm:px-6 lg:px-8">
                {/* card 1  */}

                <div className="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 flex flex-col">
                    <p className="relative text-sm font-bold">
                        <span className="absolute top-0 left-0">$</span>
                        <span className="text-6xl pl-2">20</span>
                        <span className="font-normal">/per month</span>
                    </p>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Basic</h3>
                        <p className="text-sm leading-6">For Beginner Who Want To Scale Business Globaly</p>
                    </div>
                    <ul className="pb-10 space-y-4 flex-1">
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Card Management</span>
                        </li>
                    </ul>
                    <a href="#" className="mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700">Get Started</a>
                </div>
                {/* card 2  */}
                <div className="relative border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 flex flex-col">
                    <p className="absolute top-0 -translate-y-1/2 bg-emerald-500 px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">Most Popular</p>
                    <p className="relative text-sm font-bold">
                        <span className="absolute top-0 left-0">$</span>
                        <span className="text-6xl pl-2">50</span>
                        <span className="font-normal">/per month</span>
                    </p>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Standard</h3>
                        <p className="text-sm leading-6">For Beginner Who Want To Scale Business Globaly</p>
                    </div>
                    <ul className="pb-10 space-y-4 flex-1">
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                    </ul>
                    <a href="#" className="mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700">Get Started</a>
                </div>
                {/* card 3  */}
                <div className="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 flex flex-col">
                    <p className="relative text-sm font-bold">
                        <span className="absolute top-0 left-0">$</span>
                        <span className="text-6xl pl-2">100</span>
                        <span className="font-normal">/per month</span>
                    </p>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Premium</h3>
                        <p className="text-sm leading-6">For Beginner Who Want To Scale Business Globaly</p>
                    </div>
                    <ul className="pb-10 space-y-4 flex-1">
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <a href="#" className="mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700">Get Started</a>
                </div>

                {/* Card 4 */}

                <div className="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 flex flex-col">
                    <p className="relative text-sm font-bold">
                        <span className="absolute top-0 left-0">$</span>
                        <span className="text-6xl pl-2">1200 </span>
                        <span className="font-normal">/per month</span>
                    </p>
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">Premium</h3>
                        <p className="text-sm leading-6">For Beginner Who Want To Scale Business Globaly</p>
                    </div>
                    <ul className="pb-10 space-y-4 flex-1">
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Expense Management</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Card Management</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Instant Statistics</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Bookmark Function</span>
                        </li>
                        <li className="flex items-center text-sm leading-6">
                            <i className="fa-solid fa-bookmark text-emerald-500" />
                            <span className="pl-4">Accounting System</span>
                        </li>
                    </ul>
                    <a href="#" className="mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700">Get Started</a>
                </div>

            </div>



        </div>
    )
}

export default Pricing;