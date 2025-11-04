"use client";
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import React from "react";
import ScrollButton from "@/app/ScrollButton";


export default function AllLnjectionMoldingMaterials() {

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div>
                <div className='px-40 bg-gray-900 h-full pt-20'>
                    <div className='max-w-[1280px] m-auto'>
                        <p className='font-bold text-white text-3xl pb-8 pt-10'>注塑加工材料</p>
                        <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                            注塑加工是一种广泛应用于制造各种塑料制品的工艺。选择合适的材料对于产品的性能、成本和使用寿命至关重要。
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
                    <div className='py-16 w-full flex gap-10'>
                        <div className='p-12 w-1/2 border rounded border-gray-300 '>
                            <p className='md:text-4xl font-bold text-center'>注塑加工服务介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                注塑加工是一种广泛应用于制造塑料制品的工艺，通过将热塑性或热固性塑料注入模具中成型为各种形状和尺寸的零件。注塑加工服务是指提供这一制造过程的专业服务，涵盖从设计到生产的各个环节。.我们的供应商能够满足复杂的设计要求和高精度的生产标准，丰富的经验保证有着严格的质量控制流程，并能提供相关的检测报告或认证，能够合理安排生产计划，确保在约定时间内完成订单。
                            </p>
                        </div>
                        <div className='p-12 w-1/2 border rounded border-gray-300'>
                            <p className='md:text-4xl font-bold text-center'>注塑加工定制介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                我们的服务使设计师和工程师能够为航空航天、汽车、国防、工业自动化、机械、制造、医疗设备、硬件设置、能源和机器人等行业的许多应用创建定制的部件。我们使用机器学习算法将 CAD 文件转换为定制零件的报价，确保您的设计在到达制造合作伙伴之前具有可制造性。我们的平台提供适合生产零件的各种材料和技术。
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