 {/* Xbox Section (2x2) */}
                <div
                    className="bg-gray-100 rounded-lg  transition-transform duration-500 hover:scale-105 col-span-2 row-span-2 flex justify-between items-center p-6 relative">
                    {/* Text Section */}
                    <div className="w-1/2">
                        <h1 className="text-blue-500 text-2xl">{props.mainProductTitle}The Best Place to Play.</h1>
                        <h1 className="text-6xl font-bold mb-2">{props.mainProductDescription}Xbox Consoles </h1>
                        <p className=" text-2xl text-gray-700">
                            Experience next-gen gaming with Xbox. Powerful performance,
                            immersive visuals, and the best games.
                        </p>
                        <div className="">
                            <button
                                className="mt-3 bg-yellow-400 border-6 border-teal-900 cursor-pointer text-black py-6 px-20  font-bold text-3xl shadow-md hover:bg-yellow-200">
                                <div className="flex items-center flex-row justify-between gap-4">
                                    <div>BUY NOW</div>
                                    <div>
                                        <img src={arrow} alt="" className="h-10" />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-1/2 h-full flex justify-end items-center relative">
                        <img
                            src={Xbox1}
                            alt="Xbox Console"
                            className="w-full h-full object-contain"
                        />

                        {/* Price Tag */}
                        <div
                            className="absolute top-2 right-2 w-30 h-30 bg-yellow-400 rounded-full
                        flex items-center justify-center text-black  border-6 border-teal-900
                        text-3xl shadow-lg"
                        >
                            $299
                        </div>
                    </div>
                </div>
