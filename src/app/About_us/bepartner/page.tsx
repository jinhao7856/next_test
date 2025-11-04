'use client'
import Nave from "@/app/Nave";
import Image from "next/image";
import Bottom from "@/app/Bottom";
import ScrollButton from "@/app/ScrollButton";
import React, {useState} from "react";
import Marquee from "react-fast-marquee";

export default function Page() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 pt-2 h-[450px]'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8 mt-35'>成为制造合作伙伴</p>
                            <p className='text-white font-light w-9/12 text-base text-justify leading-8'>成为制造合作伙伴是完全免费的。我们平台易于使用，且非常灵活，可适应您的工作流程和容量。并有专门的联系人帮助您进行设置、回答任何问题并发展您的业务。</p>
                            <button className='mt-10 p-[3px] relative cursor-pointer'>
                                <div
                                    className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                <div
                                    className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>获取报价
                                </div>
                            </button>
                            <p className='text-white font-light text-xs mt-5 '>
                                <i className='iconfont icon-suo font-size:12px mr-2'></i>
                                所有上传都是安全和保密的
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <Image alt="image" loading="lazy" width="1000" height="1000"
                                                   decoding="async" data-nimg="1"
                                                   className='h-full w-full object-cover scale-[1.15] color: transparent'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/about/partner1.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none;'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>稳定的收入</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>高绩效的制造业合作伙伴拥有稳定可预测的收入流，使其能够安心投资于产能提升与技术创新，实现可持续增长与推动制造业高质量发展。</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px] py-8 last:pb-16 last:pt-8 m-auto'>
                        <div className='max-w-[55%] '>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>简化的工作流程</h5>
                            <p className='text-lg leading-9 text-black/80'>让您有机会每周接受新的高价值订单。作为制造合作伙伴，您只需专注于生产定制零件。我们将有专门的联系人帮助您进行设置、回答任何问题并发展您的业务。</p>
                        </div>
                        <div className='w-[45%] flex justify-end'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <Image alt="image" loading="lazy" width="1000" height='1000'
                                                   decoding="async" data-nimg="1"
                                                   className='h-full w-full object-cover scale-[1.15] color: transparent'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/about/partner2.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
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
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <Image alt="image" width="1000" height="1000"
                                                   decoding="async" data-nimg="1" loading="lazy"
                                                   className='h-full w-full object-cover scale-[1.15] text-transparent'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/about/partner4.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>战略发展</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>我们提供强大的报价反馈系统，定期参加战略调整会议，并制定计划来帮助我们的制造合作伙伴提高绩效并扩展他们的能力，使他们能够更好的成为业内的领先者。</p>
                        </div>
                    </div>
                </div>
                <div
                    className='rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>我们的合作伙伴</h3>
                    <div
                        className='scroller relative z-20 overflow-hidden'>
                        <div className='flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <Marquee direction='right'
                                     pauseOnHover
                                     className='hover:blur-[4px] items-center justify-center'
                            >
                                <div className='w-[250px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700  md:w-[350px] ml-5'>
                                    <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                           decoding="async" data-nimg="1"
                                           className='w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer text-transparent'
                                           src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/Supplier/Supplier1.png"/>
                                </div>
                                <div className='w-[250px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700  md:w-[350px] ml-5'>
                                    <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                           decoding="async" data-nimg="1"
                                           className='w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer text-transparent'
                                           src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/Supplier/Supplier2.png"/>
                                </div>
                                <div className='w-[250px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700  md:w-[350px] ml-5'>
                                    <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                           decoding="async" data-nimg="1"
                                           className='w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer text-transparent'
                                           src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/Supplier/Supplier3.png"/>
                                </div>
                                <div className='w-[250px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700  md:w-[350px] ml-5'>
                                    <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                           decoding="async" data-nimg="1"
                                           className='w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer text-transparent'
                                           src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/Supplier/Supplier1.png"/>
                                </div>
                                <div className='w-[250px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700  md:w-[350px] ml-5'>
                                    <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                           decoding="async" data-nimg="1"
                                           className='w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer text-transparent'
                                           src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/Supplier/Supplier2.png"/>
                                </div>
                                <div className='w-[250px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700  md:w-[350px] ml-5'>
                                    <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                           decoding="async" data-nimg="1"
                                           className='w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer text-transparent'
                                           src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/Supplier/Supplier3.png"/>
                                </div>
                            </Marquee>
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
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>技术特定要求</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto'>
                                <div
                                    className=' bg-gray-50 relative group border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>CNC
                                        加工
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300 height-60px'>您专业的铣削/车床，可以完成工作，并在1到4周的交货。</p>
                                    <div
                                        className='transition duration-200 ease-linear w-full mt-4 '>
                                        <Image
                                            className='color-transparent height-10rem; w-full  object-cover rounded-xl group-hover:shadow-xl'
                                            alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                            data-nimg="1"
                                            src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto'>
                                <div
                                    className=' bg-gray-50 relative group border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white '>3D
                                        打印
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300 height-60px'>您至少拥有一台合格的增材制造机器，以完成3D打印相关工作。</p>
                                    <div
                                        className='transition duration-200 ease-linear w-full mt-4 '>
                                        <Image
                                            className='color-transparent height-10rem; w-full  object-cover rounded-xl group-hover:shadow-xl'
                                            alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                            data-nimg="1"
                                            src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four2.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto'>
                                <div
                                    className='bg-gray-50 relative group border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white '>钣金加工
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300 height-60px'>您至少拥有一台光纤激光切割机和一台折弯机，来完成钣金加工。</p>
                                    <div
                                        className='transition duration-200 ease-linear w-full mt-4'>
                                        <Image
                                            className='color-transparent height-10rem; w-full  object-cover rounded-xl group-hover:shadow-xl'
                                            alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                            data-nimg="1"
                                            src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four3.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto'>
                                <div
                                    className='bg-gray-50 relative group border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>注塑
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300 height-60px'>您需要拥有模具设计能力和注塑设备，并且在质量方面能严格把控。</p>
                                    <div
                                        className='transition duration-200 ease-linear w-full mt-4'>
                                        <Image
                                            className='color-transparent height-10rem; w-full  object-cover rounded-xl group-hover/card:shadow-xl'
                                            alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                            data-nimg="1"
                                            src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>其他要求</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto transform-3d'>
                                <div
                                    className='bg-gray-50 relative group border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>行业特定认证
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'></p>
                                    <div
                                        className='transition duration-200 ease-linear w-full mt-4 '>
                                        <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                               decoding="async" data-nimg="1"
                                               className=' w-full  object-fill rounded-xl group-hover:shadow-xl color-transparent h-[10rem]'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/about/three1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto transform-3d'>
                                <div
                                    className='bg-gray-50 relative group border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>内部后处理/表面处理能力
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'></p>
                                    <div
                                        className='transition duration-200 ease-linear w-full mt-4'>
                                        <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                               decoding="async" data-nimg="1"
                                               className=' w-full  object-fill rounded-xl group-hover:shadow-xl color-transparent h-[10rem]'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/SmoothMachining/02.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto transform-3d'>
                                <div
                                    className='bg-gray-50 relative group border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>能够在几天内完成订单
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'></p>
                                    <div
                                        className='transition duration-200 ease-linear w-full mt-4'>
                                        <Image alt="thumbnail" loading="lazy" width="1000" height="1000"
                                               decoding="async" data-nimg="1"
                                               className=' w-full  object-fill rounded-xl group-hover:shadow-xl color-transparent h-[10rem]'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/wfdj_1.png"/>
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