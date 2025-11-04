import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import React from "react";
import Link from "next/link";
import ScrollButton from "@/app/ScrollButton";

export default function AerospacepartsManufacturing() {
    return(
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-full flex h-auto'>
                    <div className='h-full'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Img" loading="lazy" width="957" height="900" decoding="async" data-nimg="1"
                             className='h-full text-transparent object-contain'
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/hangkonghangtian.png"/>
                    </div>
                    <div className='bg-gray-900 h-auto pt-20 pl-15 float-right w-full'>
                        <p className='font-bold text-white text-3xl pb-8 w-full'>
                            直接快速报价
                        </p>
                        <p className='text-white  font-light w-[68%] text-base text-justify leading-8'>
                            精准制造 智算赋能 航空航天定制 品质保障
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
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            燧研智算：加速您的创新步伐
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            航空航天零部件制造对材料、工艺和质量有着极高要求，包括高精度加工、轻量化设计、耐高温高压性能以及严格的无损检测。我们凭借先进的制造技术、精密数控设备、严格的质量管理体系以及专业的研发团队，能够完全满足这些严苛标准。无论是复杂结构的精密加工，还是高性能材料的应用，我们都能确保产品的高可靠性和安全性，为航空航天领域提供卓越的零部件解决方案，助力飞行梦想。
                        </p>
                    </div>
                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-5'>
                        航空航天和航空制造能力
                    </h3>
                    <p className='text-lg text-black/80 leading-9'></p>
                    <div className='h-auto relative max-w-[1280px] grid grid-cols-5 gap-5 m-auto'>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            原型
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            工装
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            夹具和固定装置
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            代理零件
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            遥控飞机
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            无人机
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            立方体卫星
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            燃油泵
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            结构部件
                        </div>
                        <div className='flex  flex-shrink-0 items-center h-[50px] bg-slate-100 p-5 box-border hover:bg-slate-300 hover:rounded-lg transition delay-150 duration-300 ease-in-out'>
                            小型传感器
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '></h3>
                    <div className='flex items-center justify-between space-x-8'>
                        <div className='overflow-hidden group/card relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div className='h-auto w-full relative  bg-white transform-none '>
                                    <img alt="image" loading="lazy" width="250" height="220" decoding="async"
                                         className='text-transparent object-cover w-full h-[200px]'
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/three1.png'/>
                                    <div className='h-[350px] p-8 bg-gray-50'>
                                        <p className='font-bold text-2xl mb-4 py-2'>航空航天和航空认证是ISO 9001认证，我们的供应商有专门的认证。</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                ISO 9001
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                AS 9100
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                ISO 14001
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden group/card relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div className='h-auto w-full relative  bg-white transform-none'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img alt="image" loading="lazy" width="250" height="220" decoding="async"
                                         className='text-transparent object-cover w-full h-[200px]'
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/three2.png'/>
                                    <div className='h-[350px] p-8 bg-gray-50'>
                                        <p className='font-bold text-2xl mb-4 py-2'>全面的质量文档获取验证报告，以确保最高的质量和合规性。</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                CMM检验报告
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                全尺寸检查
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                材料试验报告
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                材料证书
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                合格证书
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                首件检查
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden group/card relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div className='h-auto w-full relative  bg-white transform-none'>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img alt="image" loading="lazy" width="250" height="220" decoding="async"
                                         className='text-transparent object-cover w-full h-[200px]'
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/three3.png'/>
                                    <div className='h-[350px] p-8 bg-gray-50'>
                                        <p className='font-bold text-2xl mb-4 py-2'>最高质量标准我们使用一套严格的协议和程序来保持质量。</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                专用工装
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                使用校准设备进行尺寸检查
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                审查所有质量文件和行业认证
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                平台上和网络内的完整IP保护
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-white absolute bottom-6 left-6 z-40 opacity-1 transform-none'>
                                    <div className='w-[96%]'>
                                        <p className='font-bold text-3xl'>优点</p>
                                        <p className='font-normal text-base leading-7 text-justify mt-3'>成本低：材料价格亲民，适合初期设计验证和小批量生产。操作简单：设备普及度高，易于上手和维护。适用性强：支持多种材料（如PLA、ABS等），能制作复杂结构。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>制造能力</h3>
                    <div className='flex items-center justify-between space-x-8'>
                        <div className='overflow-hidden relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div className='h-full w-full relative  bg-white transform-none'>
                                    <img alt="image" loading="lazy" width="250" height="220" decoding="async"
                                         className='scale-[1.15] text-transparent object-contain '
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four1.png'/>
                                    <div className='h-[300px] p-2 px-5 bg-gray-50'>
                                        <p className='font-bold text-2xl py-2'>CNC加工</p>
                                        <p className=' my-2 mb-4'>铣削、车削和后处理</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                公差低至 ±.020mm (±.001 in)
                                            </p>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                5个工作日的交货时间
                                            </p>
                                        </div>
                                        <Link href='/Ability/CNCMachiningServices' className='flex py-1 text-sm text-blue-900 group'>
                                            查看我们的CNC加工服务
                                            <i className='group-hover:block hidden iconfont icon-jiantou ml-4'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div className='h-full w-full relative  bg-white transform-none'>
                                    <img alt="image" loading="lazy" width="250" height="220" decoding="async"
                                         className='scale-[1.15] text-transparent object-contain '
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four2.png'/>
                                    <div className='h-[300px] p-2 px-5 bg-gray-50'>
                                        <p className='font-bold text-2xl py-2'>3D打印</p>
                                        <p className=' my-2 mb-4'>FDM、SLA、SLS、MJF</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                ± 0.3%，下限为 ± 0.3mm (± 0.012 in)
                                            </p>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                从1个工作日开始的交货时间
                                            </p>
                                        </div>
                                        <Link href='/Ability' className='flex py-1 text-sm text-blue-900 group'>
                                            查看我们的3D打印服务
                                            <i className='group-hover:block hidden iconfont icon-jiantou ml-4'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div className='h-full w-full relative  bg-white transform-none'>
                                    <img alt="image" loading="lazy" width="250" height="220" decoding="async"
                                         className='scale-[1.15] text-transparent object-contain '
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four3.png'/>
                                    <div className='h-[300px] p-2 px-5 bg-gray-50'>
                                        <p className='font-bold text-2xl py-2'>钣金制造</p>
                                        <p className=' my-2 mb-4'>激光切割，弯曲，后处理</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                公差低至 ± 0.1mm (±.004 in)
                                            </p>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                5个工作日的交货时间
                                            </p>
                                        </div>
                                        <Link href='/Ability/SheetMetalProcessingServices' className='flex py-1 text-sm text-blue-900 group'>
                                            查看我们的钣金制造服务
                                            <i className='group-hover:block hidden iconfont icon-jiantou ml-4'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='overflow-hidden relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div className='h-full w-full relative  bg-white transform-none'>
                                    <img alt="image" loading="lazy" width="250" height="220" decoding="async"
                                         className='scale-[1.15] text-transparent object-contain '
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/general/four4.png'/>
                                    <div className='h-[300px] p-2 px-5 bg-gray-50'>
                                        <p className='font-bold text-2xl py-2'>注塑成型</p>
                                        <p className=' my-2 mb-4'>原型和生产工具</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                广泛的零件复杂性和尺寸
                                            </p>
                                            <p className='flex text-gray-600 text-sm'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                1至1m零件
                                            </p>
                                        </div>
                                        <Link href='/Ability/InjectionMoldingServices' className='flex py-1 text-sm text-blue-900 group'>
                                            查看我们的注塑成型服务
                                            <i className='group-hover:block hidden iconfont icon-jiantou ml-4'></i>
                                        </Link>
                                        <span className="i-lucide-cat w-10 h-10 animate-spin bg-blue-500"></span>
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