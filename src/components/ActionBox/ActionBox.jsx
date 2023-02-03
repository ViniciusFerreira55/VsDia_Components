import React, { useState } from 'react';

export const ActionBox = () => {
    return(
        <div className="w-48 h-48 flex flex-col bg-red-500">
            <div className="w-full h-28 flex flex-col bg-blue-600">
                <div className='w-full h-18 flex flex-row justify-between '>
                    <div className="w-2 h-2 bg-yellow-400"></div>
                    <div className="w-2 h-2 bg-red-900"></div>
                </div>
                <div className="w-full h-10 flex flex-row justify-center items-center">
                    <input type="text" className="w-full h-5 "/>
                </div>
            </div>
            <div className="w-full h-20 ">

            </div>
        </div>
    )
}


{/* <div className="w-full h-full flex flex-col justify-around">
            <div className="w-screen h-33 bg-slate-400"></div>
            <div className="w-screen h-33 bg-black"></div>
            <div className="w-screen h-33 bg-slate-400"></div>
        </div> */}

{/* <div className='items-center'>
            <div className='w-64 h-48 border-4 border-indigo-600'>
            <div className='w-64 h-32 border-4 border-indigo-600'>
                <div><input placeholder='Ação' className='items-center'></input></div>
            </div>
            </div>
        </div> */}