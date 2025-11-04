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
            <SideMenu/>
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