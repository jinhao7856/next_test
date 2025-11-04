import Link from "next/link";
import React from "react";

export const SideMenu = () => {
    return (
        <div
            className='h-screen px-4 py-4 hidden md:flex md:flex-col bg-white dark:bg-neutral-800 w-[180px] flex-shrink-0 justify-between gap-10 relative'>
            <div className=' flex flex-col gap-2 h-full overflow-y-auto overflow-x-hidden'>
                <div
                    className='font-normal  flex space-x-2 items-center mb-6  text-sm text-black py-1 relative z-20 pl-2 cursor-pointer'>
                    <Link href='/'><img alt="Avatar" loading="lazy" width="110" height="40" decoding="async" data-nimg="1"
                                        className='h-[40px] w-[110px] flex-shrink-0 text-transparent'
                                        src="https://www.quicklyre.com/_next/static/media/logoImg1.42f22541.png"/>
                    </Link>
                </div>
                <a className='flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gray-300 pl-3 rounded-xl bg-gray-300'
                   title='新报价'
                   href='/Workspace'>
                    <i className='iconfont icon-tianjia'></i>
                    <span
                        className='text-neutral-600 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 hover:text-neutral-950'>
                            新报价
                        </span>
                </a>
                <a className='flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gray-300 pl-3 rounded-xl bg-gray-300'
                   title='历史报价'
                   href='/Workspace/myQuote'>
                    <i className='iconfont icon-tianjia'></i>
                    <span
                        className='text-neutral-600 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 hover:text-neutral-950'>
                            历史报价
                        </span>
                </a>
                <a className='flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gray-300 pl-3 rounded-xl bg-gray-300'
                   title='我的订单'
                   href='/Workspace/order'>
                    <i className='iconfont icon-tianjia'></i>
                    <span
                        className='text-neutral-600 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 hover:text-neutral-950'>
                            我的订单
                        </span>
                </a>

            </div>
        </div>
    );
};