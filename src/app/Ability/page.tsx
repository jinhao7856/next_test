import React from 'react';
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import ScrollButton from "@/app/ScrollButton";


function Ability() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-full flex'>
                    <div className='float-left'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Img" loading="lazy" width="700" height="650" decoding="async" data-nimg="1"
                             className='h-full text-transparent'
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/banner_1.png"/>
                    </div>
                    <div className='bg-gray-900 h-full pt-20 pl-15 float-right'>
                        <p className='font-bold text-white text-3xl pb-8 h-full pt-10'>
                            一站式在线3D打印服务
                        </p>
                        <p className='text-white  font-light w-[68%] text-base text-justify leading-8'>
                            轻松获取高精度原型和生产部件。我们拥有遍布全国的经验丰富且设备齐全的3D打印服务网络，确保您能够快速下单并获得优质产品。所有服务均通过ISO9001、ISO13485和AS9100认证，为您提供最高质量保障。
                        </p>
                        <button className='mt-10 p-[3px] relative'>
                            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                            <div className='px-8 py-2 w-full bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent cursor-pointer'>
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
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>能力简介</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>FDM</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        快速且经济实惠的原型设计尺寸精度为 ± 0.5%，下限为 ± 0.5 mm交货时间从 1 个工作日起
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/FDM.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>SLA</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        视觉原型设计尺寸精度为 ± 0.1%，下限为 ± 0.1 毫米（± 0.004 英寸）交货时间从 2 个工作日起
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/SLA.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>SLS</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        功能性原型制作和小批量生产尺寸精度为 ± 0.1%，下限为 ± 0.1 毫米（± 0.004 英寸）交货时间从 3 个工作日
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/SLS.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>
                        3D打印成型零件图片库
                    </h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative grid gap-5 max-w-[1280px] grid-cols-4 m-auto'>
                        <div className='relative group'>
                            <p className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'></p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='class="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='h-full w-full object-cover scale-[1.15] text-transparent object-contain'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/finished1.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <p className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'></p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='class="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='h-full w-full object-cover scale-[1.15] text-transparent object-contain'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/finished2.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <p className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'></p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='class="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='h-full w-full object-cover scale-[1.15] text-transparent object-contain'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/finished3.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <p className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'></p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='class="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='h-full w-full object-cover scale-[1.15] text-transparent object-contain'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/finished4.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-auto max-w-[1280px] p-10 border  rounded flex flex-col relative m-auto'>
                    <div className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                    <div className='  text-base font-bold border-b-[1px] border-black/80 mb-3 pb-3'>材料清单</div>
                    <div className='flex w-full flex-wrap'>
                        <div className='w-1/3'>
                            <h3 className=' text-black/90 font-bold text-lg border-b-[1px] border-black/10 px-2 py-2'>FDM</h3>
                            <div className='p-4 px-6 w-full space-y-3'>
                                <span className='text-[14px] block text-black/80'>PLA（聚乳酸）</span>
                                <span className='text-[14px] block text-black/80'>ABS（丙烯腈-丁二烯-苯乙烯）</span>
                                <span className='text-[14px] block text-black/80'>PETG（聚对苯二甲酸乙二醇酯）</span>
                                <span className='text-[14px] block text-black/80'>TPU（热塑性聚氨酯）</span>
                                <span className='text-[14px] block text-black/80'>尼龙（PA）</span>
                                <span className='text-[14px] block text-black/80'>碳纤维增强塑料</span>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <h3 className=' text-black/90 font-bold text-lg border-b-[1px] border-black/10 px-2 py-2'>SLA</h3>
                            <div className='p-4 px-6 w-full space-y-3'>
                                <span className='text-[14px] block text-black/80'>标准树脂</span>
                                <span className='text-[14px] block text-black/80'>陶瓷树脂</span>
                                <span className='text-[14px] block text-black/80'>耐高温树脂</span>
                                <span className='text-[14px] block text-black/80'>透明树脂</span>
                                <span className='text-[14px] block text-black/80'>弹性树脂</span>
                                <span className='text-[14px] block text-black/80'>金属树脂</span>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <h3 className=' text-black/90 font-bold text-lg border-b-[1px] border-black/10 px-2 py-2'>SLS</h3>
                            <div className='p-4 px-6 w-full space-y-3'>
                                <span className='text-[14px] block text-black/80'>尼龙粉末（PA）</span>
                                <span className='text-[14px] block text-black/80'>金属粉末（如不锈钢、铝合金）</span>
                                <span className='text-[14px] block text-black/80'>蜡基粉末</span>
                                <span className='text-[14px] block text-black/80'>玻璃微珠填充尼龙</span>
                                <span className='text-[14px] block text-black/80'>复合材料（如碳纤维增强尼龙）</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>标准介绍</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>外观标准</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        所有表面都具有一致的视觉外观，去除了支撑结构，并将清除所有多余的支撑/构建材料。为了确保大批量的一致性，如果可能，所有部件都在同一台机器上打印。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/waiguanbiaozhun.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>检验标准</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        我们的制造合作伙伴在订单发货前进行外观和尺寸检查。我们使用标准的缺陷书和检验标准，这有助于我们在何时何地生产订单时获得一致的控制水平。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/jianyanbiaozhun.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>尺寸精度</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        对于订单的每个行项目都进行严格的检测。如果相关部件的尺寸不在相关增材制造工艺规定的定义公差范围内，则该部件将被拒收并重新打印。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/chicunjingdu.png"/>
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
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>航空航天</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        获得 AS 9100 认证的飞机、无人机、卫星和火箭的空气动力学部件。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/hangkonghangtian.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>医疗</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        创建自定义医疗设备和诊断设备，将医疗保健创新引入医院和家庭。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/yiliao.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>消费电子产品</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        制造需要高度美观特征的游戏、音频、视频和智能家居产品的零件。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/xiaofeidianziping.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>机器人与自动化</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        为这个创新行业生产复杂的机器人系统、末端执行器和自动化机械。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/jiqiren.png"/>
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

export default Ability;