import React from 'react';
import Image from "next/image";
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import ScrollButton from "@/app/ScrollButton";


function AboutUs() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>宁波禛合科技有限公司</h4>
                        <p className='text-lg text-black/80 leading-9'></p>
                    </div>
                </div>
                <div>
                    <div
                        className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'>
                                        </div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform'>
                                            <Image alt="image" loading="lazy" width="1000" height='1000'
                                                   decoding="async"
                                                   data-nimg="1" className="h-full w-full object-cover scale-[1.15]"
                                                   src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/aboutus1.png'/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className="text-4xl leading-[3.2rem] font-bold mb-5">公司定位</h5>
                            <p className="text-lg leading-9 text-black/80 text-justify">全球领先的数字化智造解决方案服务商，总部位于中国宁波，融合世界工业4.0与全球化运营经验，提供从研发件到量产的全链路闭环服务。</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between max-w-[1270px] py-8 false m-auto">
                        <div className='max-w-[55%] '>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>核心技术</h5>
                            <p className='class="text-lg leading-9 text-black/80"'>以AI驱动的“燧研智算”平台为核心，整合人工智能、工业大数据与物联网技术，实现：秒级精准报价
                                全流程透明交付（实时追踪订单与品控）。</p>
                        </div>
                        <div className='w-[45%] flex justify-end'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'>
                                        </div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/aboutus2.png'
                                                alt='image' loading="lazy" width="1000" height='1000' decoding="async"
                                                data-nimg="1"
                                                className='class="h-full w-full object-cover scale-[1.15]"'/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 transform-none opacity-0'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  py-8 last:pb-16 last:pt-8 m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div
                                            className='class="h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <Image alt="image" loading="lazy" width='1000' height='1000'
                                                   decoding="async"
                                                   data-nimg="1" className='h-full w-full object-cover scale-[1.15]'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/aboutus3.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 transform-none opacity-0'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>平台资源</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                100+精密设备制造商合作，分布式产能布局，支持48小时极速响应。行业覆盖：医疗设备、航空航天、工业自动化、新能源与汽车、军工国防、消费电子、科研机构等。
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

export default AboutUs;