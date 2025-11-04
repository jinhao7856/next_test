import {SideMenu} from "@/app/Workspace/SideMenu";
import React from "react";

export default function order() {
    return (
        <div
            className='rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-full'>
            <SideMenu/>
            <div className='flex box-border w-[calc(100%_-_180px)]'>
                <main className='w-full'>
                    <div
                        className='w-full h-[56px]  bg-white mb-5 px-10 flex items-center justify-end box-border'></div>
                    <div className='py-4 px-10 box-border h-[calc(-108px + 100vh)]'>
                        <div className='h-full'>
                            <div className='bg-white p-5 rounded-lg'>
                                <div className='text-xl font-bold mb-3'>我的订单</div>
                                <div className='flex items-center justify-between w-full my-4'>
                                    <div className='flex gap-3 flex-wrap my-8'>
                                        <div className='w-60'></div>
                                        <div className='w-60'></div>
                                    </div>
                                    <div className='flex gap-3 mb-3 flex-wrap justify-end'>
                                        <button className='cursor-pointer text-white font-normal bg-orange-600 w-[90px] h-[30px]'><span>申请开票</span></button>
                                    </div>
                                </div>
                                <div className=''></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}