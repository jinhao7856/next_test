'use client'
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from "next/link";
import Table from './Table';
import {SideMenu} from "@/app/Workspace/SideMenu";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 4}}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Workspace() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-full'>
            <div className='h-auto px-4 py-4 hidden md:flex md:flex-col bg-white dark:bg-neutral-800 w-[180px] flex-shrink-0 justify-between gap-10 relative'>
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
                    <a className='flex items-center justify-start gap-2 group/sidebar py-2 hover:bg-gray-300 pl-3 rounded-xl'
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
                    <div className='w-full h-[56px]  bg-white mb-5 px-10 flex items-center justify-end box-border'></div>
                    <div className='py-4 px-10 box-border h-[calc(100vh_-_108px)]'>
                        <div className=''>
                            <div className=''>
                                <div className='h-full font-sans relative  flex flex-col'>
                                    <div
                                        className='flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full mb-5'>
                                        <Box sx={{width: '100%'}}>
                                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                                <Tabs value={value} onChange={handleChange}
                                                      aria-label="basic tabs example">
                                                    <Tab label="CNC服务" {...a11yProps(0)} />
                                                    <Tab label="3D打印服务" {...a11yProps(1)} />
                                                    <Tab label="注塑服务" {...a11yProps(2)} />
                                                    <Tab label="钣金加工服务" {...a11yProps(3)} />
                                                </Tabs>
                                            </Box>
                                            <div
                                                className='overflow-x-auto lg:overflow-x-visible flex justify-between  w-full  relative h-full rounded-2xl  text-black bg-white '>
                                                <div className='w-4/5 mr-5 xl:mr-10 '>
                                                    <CustomTabPanel value={value} index={0}>
                                                        <div className='flex items-center justify-between mb-2'>
                                                            <div className='text-xl font-bold mb-3'>
                                                                CNC服务列表
                                                            </div>
                                                        </div>
                                                        <Table/>
                                                    </CustomTabPanel>
                                                    <CustomTabPanel value={value} index={1}>
                                                        <div className='flex items-center justify-between mb-2'>
                                                            <div className='text-xl font-bold mb-3'>
                                                                3D打印服务
                                                            </div>
                                                        </div>
                                                        <Table/>
                                                    </CustomTabPanel>
                                                    <CustomTabPanel value={value} index={2}>
                                                        <div className='flex items-center justify-between mb-2'>
                                                            <div className='text-xl font-bold mb-3'>
                                                                注塑服务
                                                            </div>
                                                        </div>
                                                        <Table/>
                                                    </CustomTabPanel>
                                                    <CustomTabPanel value={value} index={3}>
                                                        <div className='flex items-center justify-between mb-2'>
                                                            <div className='text-xl font-bold mb-3'>
                                                                钣金加工服务
                                                            </div>
                                                        </div>
                                                        <Table/>
                                                    </CustomTabPanel>
                                                </div>
                                                <div className=' rounded-lg xl:w-1/5 bg-[#ffffff] border-0'>
                                                    <div className='w-2/3 h-2/3'>
                                                        <div className='mt-5'>
                                                            <div className='flex justify-between mt-15 '>
                                                                <span>零件数量：</span>
                                                                <span>0件</span>
                                                            </div>
                                                            <div className='flex justify-between mt-5'>
                                                                <span>总计 (含税):</span>
                                                                <span>0.00</span>
                                                            </div>
                                                        </div>
                                                        <div className='mt-5'>
                                                            <button type='submit'
                                                                    className='w-full h-10 text-white bg-orange-500 rounded-sm cursor-pointer'>请先登录
                                                            </button>
                                                        </div>
                                                        <div className='mx-auto mt-[70px]'>
                                                            <div className='flex justify-center'>
                                                                <div className='h-30 w-30'>
                                                                    <img className='h-auto m-auto display-none'
                                                                         width="120" height="120"
                                                                         src="https://file.sharein.cc/public/images/sharein_order_wx.png"/>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className='flex items-center justify-center mt-5 text-[#0083EF]'>
                                                                <img alt='icon' className='w-5 h-5 mr-1'
                                                                     src="https://www.quicklyre.com/qwIco.png"/>
                                                                联系专属客服
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>
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