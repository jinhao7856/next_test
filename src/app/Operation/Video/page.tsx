import Bottom from "@/app/Bottom";
import Nave from "@/app/Nave";
import Image from "next/image";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function Video(){
    return(
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='pt-30 max-w-[1280px] mx-auto text-center mb-10'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>使用教程视频专区</h2>
                    <p className='text-base text-gray-500'>
                        为了帮助您更好地使用燧研智算平台，我们精心准备了详细的视频教程，涵盖客户和供应商的各项功能操作指南。
                    </p>
                </div>
                <div className='py-10 max-w-[1280px] m-auto'>
                    <p className='flex items-center text-2xl font-bold'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="ico" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className='text-transparent mr-[8px]'
                               src="https://www.quicklyre.com/_next/static/media/videoUserIco.1ab176ab.png"></img>
                        客户使用教程
                    </p>
                    <div className='flex flex-wrap gap-8 w-full py-8'>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    1.用户注册与登录
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    基础的用户注册与登录步骤详解，帮您轻松完成账号创建与安全登录。
                                </p>
                            </div>
                        </div>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    2.用户获取报价
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    精准的用户获取报价操作指南，教您高效提交需求并获取匹配报价。
                                </p>
                            </div>
                        </div>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    3.用户修改零件信息及下单
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    灵活的用户修改零件信息及下单流程，详解参数调整、订单提交的完整路径。
                                </p>
                            </div>
                        </div>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    4.人工报价
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    详解人工报价服务的申请方式，让定制化需求得到专业响应。
                                </p>
                            </div>
                        </div>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    5.用户查看订单与修改订单
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    通过用户查看订单与修改订单教程，您可实时掌握订单状态并灵活调整需求。
                                </p>
                            </div>
                        </div>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    6.订单全流程可视化
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    以订单全流程可视化功能演示收尾，直观呈现订单进度追踪的操作方法。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-10 max-w-[1280px] m-auto'>
                    <p className='flex items-center text-2xl font-bold'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="ico" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className='text-transparent mr-[8px]'
                             src="https://www.quicklyre.com/_next/static/media/videoSupplierIco.2d78754e.png"></img>
                        供应商使用教程
                    </p>
                    <div className='flex flex-wrap gap-8 w-full py-8'>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    1.如何申请入驻成为供应商？
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    清晰拆解入驻流程步骤，为供应商入驻提供全流程指引。
                                </p>
                            </div>
                        </div>
                        <div className='flex-1 min-w-[30%] max-w-[32%]'>
                            <div className='relative w-full h-[190px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="视频播放" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className='text-transparent'
                                     src="https://www.quicklyre.com/_next/static/media/videoIco.99e5b49c.png"/>
                            </div>
                            <div className=' px-8 pt-4'>
                                <p className='text-lg text-gray-800 font-bold underline-offset-4'>
                                    2.使用与接单
                                </p>
                                <p className='text-xs mt-2 text-gray-500 break-all'>
                                    使用与接单教程将详解订单接收、进度更新、交付管理等核心操作，助力供应商高效处理订单。
                                </p>
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