import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import Image from "next/image";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function Teamwork() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8 pt-10'>
                                创建团队账户
                            </p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                通过跨职能的高效协作与专业知识整合，团队能够制造出更高品质、更具创新性和生产效率的零件。
                            </p>
                            <button className='mt-10 p-[3px] relative cursor-pointer'>
                                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                <div className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                                    获取报价
                                </div>
                            </button>
                            <p className='text-white font-light text-xs mt-5 pb-10'>
                                <i className='iconfont icon-suo font-size:12px mr-2'></i>
                                所有上传都是安全和保密的
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  py-16 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='h-full w-full object-cover scale-[1.15] text-transparent object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/TeamWork/team1.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>什么是团队账户</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                团队账户是专为高效协作设计的企业级服务功能，支持多人在线协同管理，轻松应对复杂项目需求。通过团队账户，您可以分配权限、共享资源、实时沟通，大幅提升团队工作效率。实现从工程到采购的订单无缝交接，简化整个采购流程，并在一个统一的地方高效管理团队的所有订单。
                            </p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1280px] py-16 m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>
                        使用团队账户你能干什么
                    </h3>
                    <div className='w-full grid grid-cols-3 gap-3'>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                多成员协作管理
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                添加团队成员并分配权限，让每个成员专注于各自的任务，提升整体工作效率。
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                订单统一管理
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                无论3D打印、CNC加工还是钣金、注塑服务，所有订单均可在一个账户中集中管理，清晰追踪进度。
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                项目分类与分组
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                将复杂项目按模块或阶段进行分类，避免信息混乱，降低沟通成本。
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                资源分配与跟踪
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                实时查看团队订单的资源使用情况，合理调配生产计划，提高资源利用率。
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                文档共享管理
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                上传并存储设计文件、图纸和报告，支持版本控制，确保数据安全且随时可访问。
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                数据分析与统计
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                自动生成团队订单的统计数据，帮助优化成本管理，提升决策效率。
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='max-w-7xl mx-auto text-center'>
                        <p className='font-bold text-xl md:text-5xl dark:text-white text-black'>
                            供应商加入流程
                        </p>
                    </div>
                    <div className='max-w-7xl mx-auto relative my-16'>
                        <div className='w-full absolute border top-1 z-1'></div>
                        <div className='w-full overflow-x-auto h-[180px] flex align-text-top space-x-5 relative z-2 whitespace-nowrap'>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>注册</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'></div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>创建团队</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'></div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>邀请 其他人</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'></div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>完成</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='h-full w-full scale-[1.15] text-transparent object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/TeamWork/team2.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>加入现有团队</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                当您的同事向您发出邀请时，您将收到一条专属协作信息。点击链接后，即可进入团队协作界面，所有当前的报价与订单数据将自动整合至团队档案中，并可实时共享给全体成员。助您轻松实现高效团队协作，推动项目快速落地。
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='max-w-[55%] '>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>团队合作</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                报价： 页面显示整个团队的所有活动报价。如果您只想查看当前正在处理的报价，您可以使用方便在团队视图和个人视图之间切换。如果您想在下订单之前查看同事的报价，您可以在团队视图中轻松查看。如果要更改报价单，可以创建另一个版本。锁定价格后，该版本将对团队的其他成员可见。订单： 页面还具有团队视图和个人视图筛选功能，这对于密切关注即将到来的交付和管理整个公司非常有用。
                            </p>
                        </div>
                        <div className='w-[45%] flex justify-end'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='h-full w-full scale-[1.15] text-transparent object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/TeamWork/team3.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
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