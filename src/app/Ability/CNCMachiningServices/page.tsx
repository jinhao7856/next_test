'use client'
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import React, {useState} from "react";
import ScrollButton from "@/app/ScrollButton";
import Marquee from "react-fast-marquee";



export default function CNCMachiningServices() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-full flex'>
                    <div className=' float-left'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Img" loading="lazy" width="700" height="650" decoding="async" data-nimg="1"
                             className='h-full text-transparent'
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/banner.png"/>
                    </div>
                    <div className='bg-gray-900 h-full pt-20 pl-15 float-right'>
                        <p className='font-bold text-white text-3xl pb-8 h-full'>
                            一站式在线3D打印服务
                        </p>
                        <p className='text-white  font-light w-[68%] text-base text-justify leading-8'>
                            轻松获取高精度原型和生产部件。我们拥有遍布全国的经验丰富且设备齐全的3D打印服务网络，确保您能够快速下单并获得优质产品。所有服务均通过ISO9001、ISO13485和AS9100认证，为您提供最高质量保障。
                        </p>
                        <button className='mt-10 p-[3px] relative cursor-pointer'>
                            <div
                                className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                            <div
                                className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                                获取报价
                            </div>
                        </button>
                        <p className='text-white font-light text-xs mt-5'>
                            <i className='iconfont icon-suo  mr-2 text-[12px]'></i>
                            所有上传都是安全和保密的
                        </p>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>能力简介</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                铣削（铣床服务）
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/xixiao.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>铣削（铣床服务）</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>访问超过1,000个铣削中心，包括标准3轴铣床、索引式3+2轴铣床和全连续5轴铣床</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                车削（车床服务）
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/chexiao.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>车削（车床服务）</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>访问 300
                                                多台车削中心，包括瑞士车床和多轴车铣复合中心。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>CNC加工零件图片库</h3>
                    <div className='flex w-full h-[320px]'
                         onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div
                            className='h-[320px] w-[350px] bg-gradient-to-r from-white to-white-1000/20 z-10 left-0 absolute'></div>
                        <div className='w-full rounded-md flex flex-col items-center justify-center relative'>
                            <Marquee direction='right'
                                     pauseOnHover
                                     className='hover:blur-[4px] items-center justify-center'
                            >
                                <div
                                    className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished1.png'
                                        alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                                </div>
                                <div
                                    className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished2.png'
                                         alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                                </div>
                                <div
                                    className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished3.png'
                                        alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                                </div>
                                <div
                                    className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished1.png'
                                        alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                                </div>
                                <div
                                    className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished2.png'
                                        alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                                </div>
                                <div
                                    className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished3.png'
                                         alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                                </div>
                            </Marquee>
                            <div
                                className='h-[320px] w-[350px] bg-gradient-to-l from-white to-white-1000/20 z-10 right-0 absolute'></div>
                            {isHovered &&
                                <a href='/Workspace' target="_blank"
                                   className='cursor-pointer flex justify-items-center absolute'>
                                    <button className='z-50 cursor-pointer'>
                                        <div
                                            className='bg-indigo-500 to-purple-500 rounded-lg absolute inset-0'></div>
                                        <div
                                            className='px-8 py-2 xl:py-2  xl:px-12 2xl:py-3  text-xl  bg-black rounded-[5px]  relative group transition duration-200 text-white hover:bg-transparent'>
                                            获取报价
                                        </div>
                                    </button>
                                </a>
                            }
                        </div>
                        <div
                            className='h-[320px] w-[350px] bg-gradient-to-l from-black to-black-1000/20 z-10 flex justify-items-end'></div>
                    </div>
                </div>
                <div className='w-auto max-w-[1280px] p-10 border  rounded flex flex-col relative m-auto'>
                    <div
                        className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                    <div className='text-base font-bold border-b-[1px] border-black/80 mb-3 pb-3'>CNC加工材料清单</div>
                    <div className='flex w-full flex-wrap'>
                        <div className='w-1/3'>
                            <h3 className=' text-black/90 font-bold text-lg border-b-[1px] border-black/10 px-2 py-2'>金属</h3>
                            <div className='p-4 px-6 w-full space-y-3'>
                                <span className='text-[14px] block text-black/80'>碳素钢</span>
                                <span className='text-[14px] block text-black/80'>合金钢</span>
                                <span className='text-[14px] block text-black/80'>不锈钢</span>
                                <span className='text-[14px] block text-black/80'>铝合金</span>
                                <span className='text-[14px] block text-black/80'>铜合金</span>
                                <span className='text-[14px] block text-black/80'>钛合金</span>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <h3 className=' text-black/90 font-bold text-lg border-b-[1px] border-black/10 px-2 py-2'>塑料</h3>
                            <div className='p-4 px-6 w-full space-y-3'>
                                <span className='text-[14px] block text-black/80'>ABS</span>
                                <span className='text-[14px] block text-black/80'>PA6/PA66</span>
                                <span className='text-[14px] block text-black/80'>PC</span>
                                <span className='text-[14px] block text-black/80'>PEEK</span>
                                <span className='text-[14px] block text-black/80'>PMMA</span>
                                <span className='text-[14px] block text-black/80'>POM</span>
                                <span className='text-[14px] block text-black/80'>PS</span>
                                <span className='text-[14px] block text-black/80'>PTFE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>表面光洁度技术</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative grid gap-5 max-w-[1280px] grid-cols-4 m-auto'>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>喷砂
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div
                                        className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/pensha.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>喷砂</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>刷洗/拉丝
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div
                                        className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/shuaxilasi.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>刷洗/拉丝</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>II型喷砂+阳极氧化
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/pensha2.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>II型喷砂+阳极氧化</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>喷砂+阳极氧化II型
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/yangjiyanghua2.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>喷砂+阳极氧化II型</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>阳极氧化III型（硬涂层）
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent '
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/yangjiyanghua3.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>阳极氧化III型（硬涂层）</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>粉末涂层
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent '
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/fenmotuceng.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>粉末涂层</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>黑色氧化物
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent '
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/heiseyanghuawu.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>黑色氧化物</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>铬酸盐转化涂层
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent '
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/mingsuanyan.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>铬酸盐转化涂层</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>应用行业</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div
                                    className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>航空航天
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        获得 AS 9100 认证的飞机、无人机、卫星和火箭的空气动力学部件。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/hangkonghangtian.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div
                                    className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>医疗
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        创建自定义医疗设备和诊断设备，将医疗保健创新引入医院和家庭。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/yiliao.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div
                                    className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>汽车
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        实现电动汽车和其他汽车的创新和快速开发。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/qiche.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div
                                    className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>机器人与自动化
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        为这个创新行业生产复杂的机器人系统、末端执行器和自动化机械。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/jiqiren.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  py-16 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                                 data-nimg="1"
                                                 className='h-full w-full object-cover scale-[1.15] text-transparent object-contain'
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/pingkongjieshao.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>品控介绍，供应商管理介绍</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                我们始终致力于确保每个零件的卓越品质。为实现这一目标，我们会对所有合作制造商进行严格的审核流程，以确保其符合我们的质量要求和生产能力标准。此外，在生产过程中，每一份订单都会经过细致入微的过程检查。这包括根据行业标准进行精确的尺寸测量以及专业的外观检测，以此确保每一个交付的产品都达到最高水准。这种双重保障机制是我们对质量承诺的具体体现，也是我们为客户提供可靠解决方案的重要基石。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Bottom/>
            </div>
            <div>
                <ScrollButton/>
            </div>
        </div>
    )
}