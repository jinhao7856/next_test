'use client'
import React from "react";
import Link from "next/link";
import {Input, Select} from "antd";

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
                                <div className='text-xl font-bold mb-3'>我的订单</div>
                                <div className='flex items-center justify-between w-full my-4'>
                                    <div className='flex gap-3 flex-wrap my-8'>
                                        <div className='w-60'>
                                            <div className='w-9/10 h-full'>
                                                <Select
                                                    className='w-full h-full hover:border-orange-500'
                                                    placeholder='选择订单状态'
                                                    onChange={handleChange}
                                                    allowClear
                                                    options={[
                                                        {value: '1', label: <span>所有订单</span>},
                                                        {value: '2', label: <span>待报价</span>},
                                                        {value: '3', label: <span>已确认</span>},
                                                        {value: '4', label: <span>生产中</span>},
                                                        {value: '5', label: <span>申请取消</span>},
                                                        {value: '6', label: <span>订单取消</span>},
                                                        {value: '7', label: <span>生产完成</span>},
                                                        {value: '8', label: <span>配送中</span>},
                                                        {value: '9', label: <span>已收货</span>},
                                                        {value: '10', label: <span>订单完成</span>},
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                        <div className='w-60'>
                                            <div className='h-full flex'>
                                                <Input placeholder='输入订单编号或者部件名'/>
                                                <span
                                                    className='w-[40px] bg-orange-600 hover:bg-orange-500 flex items-center justify-center text-white cursor-pointer'>
                                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="search"
                                                         width="1em" height="1em" fill="currentColor"
                                                         aria-hidden="true"><path
                                                        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 mb-3 flex-wrap justify-end'>
                                        <button
                                            className='cursor-pointer text-white font-normal bg-orange-600 w-[90px] h-[30px]'>
                                            <span>申请开票</span></button>
                                    </div>
                                </div>
                                <div className=''>
                                    <table className='table-fixed w-full min-w-1'>
                                        <thead className=''>
                                        <tr className='text-[14px]'>
                                            <th className='w-1'></th>
                                            <th className='w-10'>报价编号</th>
                                            <th className='w-10'>工艺类型</th>
                                            <th className='w-10'>用户信息</th>
                                            <th className='w-10'>数量</th>
                                            <th className='w-10'>总价</th>
                                            <th className='w-10'>图纸信息</th>
                                            <th className='w-10'>交付日期</th>
                                            <th className='w-10'>状态</th>
                                            <th className='w-10'>支付状态</th>
                                            <th className='w-10'>下单时间</th>
                                            <th className='w-10'>操作</th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <div className='w-full h-[50px] border-y border-gray-100 mt-5'>
                                        <span className='h-full text-[14px] text-gray-300 flex justify-center items-center'>暂无数据</span>
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