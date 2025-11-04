'use client'
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import React, {useState} from "react";
import ScrollButton from "@/app/ScrollButton";
import Marquee from "react-fast-marquee";

export default function InjectionMoldingServices() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-full flex'>
                    <div className='w-auto float-left'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Img" loading="lazy" width="700" height="650" decoding="async" data-nimg="1"
                             className='h-full text-transparent'
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/banner.png"/>
                    </div>
                    <div className='bg-gray-900 h-full pt-20 pl-15 float-right w-full'>
                        <p className='font-bold text-white text-3xl pb-8 h-full'>
                            一站式注塑服务
                        </p>
                        <p className='text-white  font-light w-[68%] text-base text-justify leading-8'>
                            注塑成型服务是一种高效、灵活且广泛应用的塑料制品加工方式，能够满足客户对质量、效率和定制化的需求。通过选择专业的供应商，企业可以专注于产品设计和市场开发，而将制造环节外包给经验丰富、技术先进的合作伙伴。
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
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>能力简介</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div
                                className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div
                                    className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>塑料注射成型
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        注射成型是将高压热塑性塑料注射到模具中的制造过程。非常适合大批量生产。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/slzscx.png"/>
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
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>嵌件成型
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        一种制造工艺，其中零件围绕模具中预装的嵌件进行模制。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/qjcx.png"/>
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
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>包复成型
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        一种制造工艺，其中一种塑料材料模压在另一种塑料材料上以制造单个组件。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/bfcx.png"/>
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
                                        className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>液体硅橡胶成型
                                    </div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        一种热固性工艺，涉及将两组分溶液混合在一起以生产灵活耐用的部件。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/ytgxjcx.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>注塑零件图片库</h3>
                    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                        className='flex w-full h-[320px]'>
                        <div className='h-[320px] w-[350px] bg-gradient-to-r from-white to-white-1000/20 z-10 left-0 absolute'></div>
                        <div className='w-full rounded-md flex flex-col items-center justify-center relative'>
                            <Marquee direction='right'
                                     pauseOnHover
                                     className='hover:blur-[4px] items-center justify-center'
                            >
                                <div className='object-top h-[300px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    <img alt="thumbnail" loading="lazy" width="1000" height="1000"
                                         decoding="async" data-nimg="1"
                                         className='w-full object-contain rounded-2xl '
                                         src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/finished1.png"/>
                                </div>
                                <div className='object-top h-[300px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    <img alt="thumbnail" loading="lazy" width="1000" height="1000"
                                         decoding="async" data-nimg="1"
                                         className='w-full object-contain rounded-2xl '
                                         src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/finished2.png"/>
                                </div>
                                <div className='object-top h-[300px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    <img alt="thumbnail" loading="lazy" width="1000" height="1000"
                                         decoding="async" data-nimg="1"
                                         className='w-full object-contain rounded-2xl '
                                         src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/finished3.png"/>
                                </div>
                                <div className='object-top h-[300px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    <img alt="thumbnail" loading="lazy" width="1000" height="1000"
                                         decoding="async" data-nimg="1"
                                         className='w-full object-contain rounded-2xl '
                                         src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/finished1.png"/>
                                </div>
                                <div className='object-top h-[300px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    <img alt="thumbnail" loading="lazy" width="1000" height="1000"
                                         decoding="async" data-nimg="1"
                                         className='w-full object-contain rounded-2xl '
                                         src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/finished2.png"/>
                                </div>
                                <div className='object-top h-[300px] max-w-full relative  flex-shrink-0 rounded-2xl bg-slate-800 md:w-[330px] ml-5 cursor-pointer'>
                                    <img alt="thumbnail" loading="lazy" width="1000" height="1000"
                                         decoding="async" data-nimg="1"
                                         className='w-full object-contain rounded-2xl '
                                         src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/finished3.png"/>
                                </div>
                            </Marquee>
                            <div className='h-[320px] w-[350px] bg-gradient-to-l from-white to-white-1000/20 z-10 right-0 absolute'></div>
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
                <div className=' items-center  max-w-[1280px] py-16 m-auto'>
                    <h3 className='text-black text-5xl font-bold mb-5 text-center'>注塑加工材料清单</h3>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                        <div className='relative w-full overflow-auto'>
                            <table className='w-full caption-bottom text-sm '>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>特性</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>材料</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>抗冲击
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>ABS
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PMMA
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PVC
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PE
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PC
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>耐磨
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>POM
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PEEK
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>UHMW
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>尺寸稳定性
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>ABS
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PBT
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>HIPS
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PPS
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>耐化学性
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PEEK
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PP
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PBT
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PE
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>LDPE
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PA
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>成本效益
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>PP
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>HDPE
                                            </div>
                                            <div
                                                className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>LDPE
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/InjectionMoldingServices/pingkongjieshao.png"/>
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