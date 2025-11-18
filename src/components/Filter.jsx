import React, { useState } from "react";

function Filter() {
    const [pickup, setPickup] = useState({
        location: "Russia",
        date: "",
        time: ""
    });

    const [dropoff, setDropoff] = useState({
        location: "Russia",
        date: "",
        time: ""
    });

    const swapValues = () => {
        setPickup(dropoff);
        setDropoff(pickup);
    };

    return (
        <div className='px-6 mb-9 flex flex-col gap-11 relative md-desk:flex-row md-desk:items-center md-desk:justify-center md-desk:gap-6 b-desk:w-[1250px] b-desk:mx-auto b-desk:px-0'>

            {/* PICKUP */}
            <div className='p-4 bg-white rounded-[10px] md-desk:w-full border-gray-200 border-2'>
                <div className='flex items-center gap-3'>
                    <div className='w-5 h-5 rounded-full bg-blue-600 border-[5px] border-blue-200' />
                    <p className='font-semibold text-[17px]'>Pick - Up</p>
                </div>

                <div className='grid grid-cols-3 gap-4 mt-5'>
                    {/* Location */}
                    <div className='flex flex-col'>
                        <b>Locations</b>
                        <select
                            className='inpt'
                            value={pickup.location}
                            onChange={e =>
                                setPickup({ ...pickup, location: e.target.value })
                            }
                        >
                            <option>Russia</option>
                            <option>Kazakhstan</option>
                            <option>Kyrgyzstan</option>
                            <option>Tajikistan</option>
                            <option>Turkmenistan</option>
                            <option>Uzbekistan</option>
                            <option>Armenia</option>
                            <option>Georgia</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div className='flex flex-col'>
                        <b>Date</b>
                        <input
                            type="date"
                            className='inpt'
                            value={pickup.date}
                            onChange={e =>
                                setPickup({ ...pickup, date: e.target.value })
                            }
                        />
                    </div>

                    {/* Time */}
                    <div className='flex flex-col'>
                        <b>Time</b>
                        <input
                            type="time"
                            className='inpt'
                            value={pickup.time}
                            onChange={e =>
                                setPickup({ ...pickup, time: e.target.value })
                            }
                        />
                    </div>
                </div>
            </div>

            {/* SWAP BUTTON */}
            <button
                onClick={swapValues}
                className='outline-none shadow-2xl shadow-gray-400 border-2 border-blue-400 bg-blue-600 w-fit p-[18px] rounded-[13px] flex cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md-desk:static md-desk:translate-x-0 md-desk:translate-y-0'
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.16124 3.83632L7.16124 17.4541" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.0837 7.93262L7.16148 3.83595L11.2393 7.93262" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.089 20.167L17.089 6.54921" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.167 16.0713L17.0892 20.168L13.0114 16.0713" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* DROPOFF */}
            <div className='p-4 bg-white rounded-[10px] md-desk:w-full border-gray-200 border-2'>
                <div className='flex items-center gap-3'>
                    <div className='w-5 h-5 rounded-full bg-blue-400 border-[5px] border-blue-200' />
                    <p className='font-semibold text-[17px]'>Drop - Off</p>
                </div>

                <div className='grid grid-cols-3 gap-4 mt-5'>
                    {/* Location */}
                    <div className='flex flex-col'>
                        <b>Locations</b>
                        <select
                            className='inpt'
                            value={dropoff.location}
                            onChange={e =>
                                setDropoff({ ...dropoff, location: e.target.value })
                            }
                        >
                            <option>Russia</option>
                            <option>Kazakhstan</option>
                            <option>Kyrgyzstan</option>
                            <option>Tajikistan</option>
                            <option>Turkmenistan</option>
                            <option>Uzbekistan</option>
                            <option>Armenia</option>
                            <option>Georgia</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div className='flex flex-col'>
                        <b>Date</b>
                        <input
                            type="date"
                            className='inpt'
                            value={dropoff.date}
                            onChange={e =>
                                setDropoff({ ...dropoff, date: e.target.value })
                            }
                        />
                    </div>

                    {/* Time */}
                    <div className='flex flex-col'>
                        <b>Time</b>
                        <input
                            type="time"
                            className='inpt'
                            value={dropoff.time}
                            onChange={e =>
                                setDropoff({ ...dropoff, time: e.target.value })
                            }
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Filter;
