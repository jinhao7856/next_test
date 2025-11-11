'use client'
import React from "react";
import Link from "next/link";

export default function order() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div
            className='rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-full'>
            <div
                className='h-auto px-4 py-4 hidden md:flex md:flex-col bg-white dark:bg-neutral-800 w-[180px] flex-shrink-0 justify-between gap-10 relative'>
                <div className=' flex flex-col gap-2 h-full overflow-y-auto overflow-x-hidden'>
                    <div
                        className='font-normal  flex space-x-2 items-center mb-6  text-sm text-black py-1 relative z-20 pl-2 cursor-pointer'>
                        <Link href='/'><img alt="Avatar" loading="lazy" width="110" height="40" decoding="async"
                                            data-nimg="1"
                                            className='h-[40px] w-[110px] flex-shrink-0 text-transparent'
                                            src="https://www.quicklyre.com/_next/static/media/logoImg1.42f22541.png"/>
                        </Link>
                    </div>
                    <a className='flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gray-300 pl-3 rounded-xl '
                       title='新报价'
                       href='/Workspace'>
                        <i className='iconfont icon-tianjia text-black font-semibold'></i>
                        <span
                            className='text-neutral-600 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 hover:text-neutral-950'>
                            新报价
                        </span>
                    </a>
                    <a className='flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gray-300 pl-3 rounded-xl '
                       title='历史报价'
                       href='/Workspace/myQuote'>
                        <i className='iconfont icon-baojia text-neutral-600 font-semibold'></i>
                        <span
                            className='text-neutral-600 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 hover:text-neutral-950'>
                            历史报价
                        </span>

                    </a>
                    <a className='flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gray-300 pl-3 rounded-xl bg-gray-300'
                       title='我的订单'
                       href='/Workspace/order'>
                        <i className='iconfont icon-dingdan text-neutral-600 font-semibold'></i>
                        <span
                            className='text-neutral-600 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 hover:text-neutral-950'>
                            我的订单
                        </span>
                    </a>
                </div>
            </div>
            <div className='flex box-border w-[calc(100%_-_180px)]'>
                <main className='w-full'>
                    <div
                        className='w-full h-[56px]  bg-white mb-5 px-10 flex items-center justify-end box-border'></div>
                    <div className='py-4 px-10 box-border h-[calc(100vh_-_108px)]'>
                        <div className='h-full'>
                            <div className='bg-white p-5 rounded-lg'>
                                <div className='border-b-[1px] border-gray-200 h-[50px] flex items-center'>
                                    <div className='flex justify-center items-center'>
                                        <div className='m-2'><a href='/Workspace/order'
                                                className='text-[14px] text-[#00000073] hover:bg-gray-200 hover:text-black cursor-pointer'>我的订单</a>
                                        </div>
                                        <div className='text-[14px] text-[#00000073]'>/</div>
                                        <div className='m-2 text-[14px] text-[#EA580C] font-bold'>申请开票</div>
                                    </div>
                                </div>
                                <div className='max-h-[80vh] overflow-y-auto'>
                                    <div className='w-[900px] mx-auto py-[25px]'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}