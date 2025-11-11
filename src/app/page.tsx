'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import Bottom from "./Bottom";
import Nave from "./Nave";
import ScrollButton from "@/app/ScrollButton";


function IndexPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div>
                <Nave/>
                <main>
                    <div className='relative flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg p-10 md:px-[12rem]'>
                        <div className='mt-16 flex flex-col lg:flex-row justify-between items-center w-full overflow-hidden relative  text-black'>
                            <div className='flex-1 mt-16 text-center lg:text-left'>
                                <div className='text-2xl font-bold dark:text-white mr-0 xl:mr-24 md:text-3xl sm:text-3xl lg:text-5xl'>
                                    一站式AI报价智造服务
                                </div>
                                <div className='font-light leading-relaxed py-4 mr-0 lg:mr-12 text-justify text-black dark:text-gray-300'>
                                    <p className='mt-3 font-bold'>100+材料
                                        <span className='font-normal'>×</span>ISO标准化产线
                                        <span className='font-normal'>×</span>24h/7d制造系统
                                    </p>
                                    <p className='mt-4 text-[21px] '>
                                        深度融合世界工业4.0成熟模式与全球化运营经验，致力于为全球企业提供从“研发→验证→量产交付”的全链路闭环服务，助力企业实现硬件产品的敏捷开发与高效落地
                                    </p>
                                </div>
                                <a href='/Workspace' target="_blank">
                                    <button className='relative cursor-pointer'>
                                        <div
                                            className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                        <div
                                            className='px-4 py-1 xl:py-2  xl:px-12 2xl:py-3  text-xl m-0.5  bg-black rounded-[6px]  relative transition duration-200 text-white hover:bg-transparent'>
                                            获取报价
                                        </div>
                                    </button>
                                </a>
                            </div>
                            <div className='p-2'>
                                <div
                                    className='relative border-black/[0.1]  w-[25rem] xl:w-[30rem] 2xl:w-[30rem] h-auto rounded-xl'>
                                    <div className='w-full mt-4'>
                                        <Image
                                            src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/prototypeImg.jpeg'
                                            alt='thumbnail' width='800' height='800'
                                            decoding='async' data-nimg='1' loading='lazy'
                                            className='w-full object-cover rounded-xl hover:shadow-xl text-transparent'></Image>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  gap-2 sm:gap-6 lg:gap-8   mt-20 sm:mt-32 lg:mt-52 xl:mt-72   '>
                            <div className='flex items-center justify-center perspective-[1000px]'>
                                <div
                                    className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto transform-3d rotate-y-0 rotate-x-0'>
                                    <div
                                        className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                        <div className='h-full '>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white transform-3d translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);'>
                                                CNC服务
                                            </div>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300 height: 80px; transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);'>CNC加工是一种通过计算机控制机床进行精密切割、钻孔、铣削等操作的技术，能够制造高精度的金属或塑料零件。
                                            </div>
                                            <div
                                                className='transition duration-200 ease-linear w-full mt-4 transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);'>
                                                <Image
                                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/CNC/CNCImg1.jpeg'
                                                    alt='thumbnail' loading='lazy' width='1000' height='1000'
                                                    decoding='async' data-nimg='1'
                                                    className='h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-transparent'></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center perspective-[1000px]'>
                                <div
                                    className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto transform-3d rotate-y-0 rotate-x-0'>
                                    <div
                                        className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                        <div className='h-full'>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white transform-3d'>
                                                3D打印服务
                                            </div>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300 '>
                                                3D打印是一种增材制造技术，通过逐层叠加材料来创建三维物体。它能够将数字模型直接转化为实物。
                                            </div>
                                            <div
                                                className='transition duration-200 ease-linear w-full mt-4 '>
                                                <Image
                                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/3D/3DImg.jpeg'
                                                    alt='thumbnail' loading='lazy' width='1000' height='1000'
                                                    decoding='async' data-nimg='1'
                                                    className='h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-transparent'></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center perspective-[1000px]'>
                                <div
                                    className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto transform-3d rotate-y-0 rotate-x-0'>
                                    <div
                                        className=' bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                        <div className='h-full'>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white transform-3d'>
                                                注塑服务
                                            </div>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300 '>
                                                注塑加工是一种通过将熔融塑料注入模具腔体内，冷却成型后得到塑料制品的制造技术。
                                            </div>
                                            <div
                                                className='transition duration-200 ease-linear w-full mt-4'>
                                                <Image
                                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/zhusuo/zhusuoImg.jpeg'
                                                    alt='thumbnail' loading='lazy' width='1000' height='1000'
                                                    decoding='async' data-nimg='1'
                                                    className='h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-transparent'></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center perspective-[1000px]'>
                                <div
                                    className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto transform-3d rotate-y-0 rotate-x-0'>
                                    <div
                                        className=' bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                        <div className='h-full'>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white transform-3d'>
                                                钣金加工服务
                                            </div>
                                            <div
                                                className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                                钣金加工是一种通过冲压、折弯、焊接等工艺对薄板材料进行成型的制造技术，广泛应用于金属结构件的生产。
                                            </div>
                                            <div
                                                className='transition duration-200 ease-linear w-full mt-4'>
                                                <Image
                                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/banjin/banjinImg.jpeg'
                                                    alt='thumbnail' loading='lazy' width='1000' height='1000'
                                                    decoding='async' data-nimg='1'
                                                    className='h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl bg-transparent'></Image>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className=' pt-24 dark:bg-black bg-white w-full'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='opacity: 1; transform: none;'>
                            <p className='font-bold text-xl md:text-5xl dark:text-white text-black'>制造网络</p>
                            <p className='text-sm font-light md:text-2xl md:leading-10 text-neutral-800 max-w-4xl mx-auto py-12 '>我们凭借内部精密模具制造中心与经过严格审核的全球网络资源相结合的独特优势，为客户提供一站式智能制造解决方案。</p>
                        </h1>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-[67%]'>
                            <div className='w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative '>
                                <img alt="world map" draggable="false" width="1056" height="495" decoding="async"
                                     data-nimg="1"
                                     className="h-full w-full" src='/'/>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <img src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/CNC/CNCImg1.jpeg'
                                     alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                            <div
                                className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/3D/3DImg.jpeg'
                                     alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                            <div
                                className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/zhusuo/zhusuoImg.jpeg'
                                    alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                            <div
                                className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/banjin/banjinImg.jpeg'
                                    alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                            <div
                                className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/CNC/CNCImg1.jpeg'
                                     alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                            <div
                                className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/3D/3DImg.jpeg'
                                     alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                            <div
                                className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/zhusuo/zhusuoImg.jpeg'
                                    alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                            <div
                                className='object-top h-[302px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800  md:w-[330px] ml-5 cursor-pointer'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/banjin/banjinImg.jpeg'
                                    alt='123' width='330' height='300' className='object-contain rounded-2xl'/>
                            </div>
                        </Marquee>
                        <div
                            className='h-[320px] w-[350px] bg-gradient-to-l from-white to-white-1000/20 z-10 right-0 absolute'></div>
                        {isHovered &&
                            <a href='/Workspace' target="_blank"
                               className='cursor-pointer flex justify-center items-center absolute'>
                                <button className='z-10 cursor-pointer'>
                                    <div
                                        className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                    <div
                                        className='px-12 py-3 text-xl bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                                        获取报价
                                    </div>
                                </button>
                            </a>
                        }
                    </div>
                </div>
                <div className='w-full bg-white pt-24'>
                    <h1 className='font-bold text-xl md:text-5xl dark:text-white text-black text-center'>平台使用流程</h1>
                    <div className='sm:px-[5rem] md:px-[10rem] lg:px-[20rem] relative  pb-24'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/liucheng.png'
                             width='1296' height='830' alt='流程'>
                        </img>
                    </div>
                </div>
                <div>
                    <Bottom/>
                </div>
                <div>
                    <ScrollButton/>
                </div>
            </div>
        </>


    )
}

export default IndexPage;