"use client";
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import React from "react";
import ScrollButton from "@/app/ScrollButton";
import UsualProblems from "@/app/Material/CNCMachiningServices/UsualProblems";


export default function CommpositeMaterial() {

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div>
                <div className='px-40 bg-gray-900 h-full pt-20'>
                    <div className='max-w-[1280px] m-auto'>
                        <p className='font-bold text-white text-3xl pb-8 pt-10'>CNC机加工</p>
                        <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                            CNC加工是一种高精度的机械加工技术，广泛应用于汽车、航空航天、医疗、模具制造等领域。
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
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>名字</th>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>描述</th>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>类型</th>
                                    </tr>
                                    </thead>
                                    <tbody className='border-0'>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-200 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>电木(PF)
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>塑料
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
                            <p className='md:text-4xl font-bold text-center'>CNC加工服务介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                我们提供最先进的 CNC 服务，保证始终如一的质量和快速的周转时间。通过我们的供应商网络，我们拥有
                                1,600 多台铣削和金属车床，可以提供稳定的产能和有竞争力的价格。我们的制造商网络使我们能够完成
                                CNC 零件的小批量订单并处理更复杂的 CNC 加工工作，您可以使用各种材料和表面处理选项生产复杂的原型和大批量生产。
                            </p>
                        </div>
                        <div className='p-12 w-1/2 border rounded border-gray-300'>
                            <p className='md:text-4xl font-bold text-center'>CNC加工定制介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                我们的服务使设计师和工程师能够为航空航天、汽车、国防、工业自动化、机械、制造、医疗设备、硬件设置、能源和机器人等行业的许多应用创建定制的
                                CNC部件。我们使用机器学习算法将 CAD
                                文件转换为定制零件的报价，确保您的设计在到达制造合作伙伴之前具有可制造性。我们的平台提供适合生产零件的各种材料和技术。
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