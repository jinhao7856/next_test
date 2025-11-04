"use client";
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import React from "react";
import ScrollButton from "@/app/ScrollButton";
import UsualProblems from "@/app/Material/SheetMetalProcessing/UsualProblems";


export default function SheetMetalProcessing() {

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div>
                <div className='px-40 bg-gray-900 h-full pt-20'>
                    <div className='max-w-[1280px] m-auto'>
                        <p className='font-bold text-white text-3xl pb-8 pt-10'>钣金加工材料</p>
                        <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                            在钣金加工中，选择合适的材料至关重要，因为材料的性能直接影响到加工难度、成本以及最终产品的质量。
                        </p>
                        <button className='mt-10 p-[3px] relative'>
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
            <div className='bg-white h-full w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1280px] '>
                    <div className='items-center  max-w-[1280px] py-16 m-auto'>
                        <div className='mb-10'>
                            <h3 className='text-black text-5xl font-bold mb-5 text-center'></h3>
                        </div>
                        <div className='p-10 border rounded relative border-gray-300 '>
                            <div
                                className='pointer-events-none absolute'></div>
                            <div className='relative w-full overflow-auto '>
                                <table className='w-full caption-bottom text-sm boeder border-gray-300'>
                                    <thead>
                                    <tr className='border-b transition-colors hover:bg-gray-200 border-gray-300'>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground w-1/5'>名字</th>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground w-3/5'>描述</th>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>类型</th>
                                    </tr>
                                    </thead>
                                    <tbody className='border-0'>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>钢-Q235A
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>碳素钢
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>铝-6061-T6
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-sm text-black/80 text-justify mr-12 leading-6'>
                                                快速退火：加热温度350～410℃;随材料有效厚度的不同，保温时间在30～120min之间;空气或水冷。2 高温退火：加热温度350～500℃;成品厚度≥6mm时，保温时间为10～30min、小于6mm时，热透为止;空气冷。3 低温退火：加热温度150～250℃;保温时间为2～3h;空气或水冷。均匀化：570摄氏度，保温7小时，空冷。温馨提醒您6061铝合金密度为2800kg/m^3
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>铝合金
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>不锈钢-304
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>不锈钢
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>钢-45#
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>碳素钢
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>不锈钢-316L
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>不锈钢
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>钢-Q235A(镀锌)
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>碳素钢
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>SPCC
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>碳素钢
                                            </div>
                                        </td>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className='py-16 w-full flex gap-10'>
                        <div className='p-12 w-1/2 border rounded border-gray-300 '>
                            <p className='md:text-4xl font-bold text-center'>钣金加工服务介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                钣金加工服务以其高效性、灵活性和多样化的特点，在现代制造业中扮演着重要角色。选择一家技术先进、经验丰富且质量可靠的钣金加工服务商，能够有效提升产品的质量和市场竞争力。我们的供应商能够满足复杂的设计要求和高精度的生产标准，丰富的经验保证有着严格的质量控制流程，并能提供相关的检测报告或认证，能够合理安排生产计划，确保在约定时间内完成订单。
                            </p>
                        </div>
                        <div className='p-12 w-1/2 border rounded border-gray-300'>
                            <p className='md:text-4xl font-bold text-center'>钣金加工定制介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                我们的服务使设计师和工程师能够为航空航天、汽车、国防、工业自动化、机械、制造、医疗设备、硬件设置、能源和机器人等行业的许多应用创建定制的部件。我们使用机器学习算法将 CAD 文件转换为定制零件的报价，确保您的设计在到达制造合作伙伴之前具有可制造性。我们的平台提供适合生产零件的各种材料和技术。
                            </p>
                        </div>
                    </div>
                    <div className='py-16'>
                        <UsualProblems/>
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