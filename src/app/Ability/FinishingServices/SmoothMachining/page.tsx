import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function SmoothMachining() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div>
                <div className='px-40 bg-gray-900 h-full pt-20'>
                    <div className='max-w-[1280px] m-auto'>
                        <p className='font-bold text-white text-3xl pt-10'>表面平滑度处理-工艺简介</p>
                        <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                            通过先进的自动化打磨系统与精密抛光技术，我们能够有效去除加工痕迹，提升产品表面光滑度和光泽度。
                        </p>
                        <button className='mt-10 p-[3px] relative cursor-pointer'>
                            <div
                                className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                            <div
                                className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                                获取报价
                            </div>
                        </button>
                        <p className='text-white font-light text-xs mt-5 pb-10'>
                            <i className='iconfont icon-suo  mr-2 text-[12px]'></i>
                            所有上传都是安全和保密的
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            加工参数
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            表面处理：粗糙度为 Ra 1.6 μm （64 μin）。外观可用性：光滑平整。视觉外观：可以看到轻微的表面划痕。
                        </p>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>光滑机加工零件示例</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>

                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500
'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/SmoothMachining/01.jpg'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-1 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'></p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>

                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/SmoothMachining/02.jpg'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'></p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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