import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import ScrollButton from "@/app/ScrollButton";
import React from "react";



export default function ManufacturingPartners() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8 pt-10'>加入我们的供应商网络</p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                通过燧研智算，您能轻松访问由经验丰富的专业制造商组成的精选网络，他们因卓越的运营能力和高质量服务而被严格筛选。无论您的项目需求如何复杂，我们都能提供灵活高效的解决方案，助您实现完全的设计自由，同时构建更具弹性的制造供应链，让创新与生产无缝衔接。
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
                <div className='max-w-[1280px]  py-20 m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>维护供应商网络</h3>
                    <div className='flex items-center w-full'>
                        <div>
                            <p className='text-base leading-8 mr-5 text-black/80'>
                                我们凭借内部精密模具制造中心与经过严格审核的全球网络资源相结合的独特优势，为客户提供一站式智能制造解决方案。从设计到交付，我们的服务涵盖3D打印创新解决方案、CNC精密切削加工、注塑成型工艺以及钣金件制作等全方位制造技术。凭借深厚的数字制造专业知识和工程经验，我们能够满足您从原型开发到大批量生产的所有需求。
                            </p>
                        </div>
                        <div className='w-1/2 shrink-[0]'>
                            <div className='w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans'>
                                <p>图片</p>

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
                                <p className='text-xl font-bold'>初步外联</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    我们会联系我们认为符合我们标准的供应商，以衡量兴趣并评估匹配度。
                                </div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>第一次评估</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    我们会进行评估，看看供应商是否符合 燧研智算 的资格标准。我们还提供有关与我们合作的详细信息。
                                </div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>工厂审核</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    燧研智算审核员评估质量管理绩效和环境/社会责任。
                                </div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>法律尽职调查</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    每个供应商都必须持有正确的注册和许可证。我们进行全面的背景调查并签署正式协议以确保合规性。
                                </div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>平台接入</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    一旦供应商符合我们的标准，我们就会允许他们访问报价构建平台。
                                </div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>技术培训</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    为了确保从订购到交付的流程顺利进行，我们对每位 MP 进行平台背后的技术标准、物流和通信要求方面的培训。
                                </div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>前10个订单</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    供应链经理监控每个新供应商的前10个订单。我们对生产前和生产后进行现场质量控制。
                                </div>
                            </div>
                            <div className='inline-block w-[220px] shrink-0'>
                                <i className='block w-[10px] h-[10px] rounded-3xl bg-gray-500 ml-10 mb-5'></i>
                                <p className='text-xl font-bold'>质量保证</p>
                                <div className='w-full block break-words whitespace-normal text-sm mt-2 text-gray-500'>
                                    为了确保我们的网络达到并超过行业标准，我们会定期审核我们的 MP 并推动持续改进。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1280px] py-16 m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>
                        审核供应商流程
                    </h3>
                    <div className='w-full grid grid-cols-3 gap-3'>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                质量管理和质量体系
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                认证 （ISO/AS）质量组织质量政策和目标
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                可追溯性
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                原材料（进出记录日期和数量）制造过程记录供应商/分包商的要求级别
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                社会审计
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                安全招聘实践和工作场所保护出色的辨别力公平的工作时间、工资和报酬
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                接收/进货质量控制
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                来料识别进料和记录的质量控制传入和传出管理 （FIFO）
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                生产和包装
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                识别正在进行的订单批次机器和制造设备生产过程中的质量控制
                            </div>
                        </div>
                        <div className='bg-gray-200 m-2.5 p-5 h-[180px] hover:bg-gray-300 hover:shadow-2xl'>
                            <h6 className='text-xl mb-2'>
                                主包装和储存/FQC
                            </h6>
                            <div className='text-sm leading-6 text-black/60'>
                                饰面产品/零件的标识成品检验健康和安全条件
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>
                        供应商图片展示
                    </h3>
                    <div className='scroller relative z-20 overflow-hidden'>
                        <ul className='flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap'>
                            <li className='w-[250px] max-w-full relative rounded-2xl  flex-shrink-0 border-slate-700  md:w-[350px] '></li>
                        </ul>
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