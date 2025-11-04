"use client";
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import React from "react";
import ScrollButton from "@/app/ScrollButton";
import UsualProblems from "@/app/Material/3Dprinting/UsualProblems";



export default function Printing() {

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div>
                <div className='px-40 bg-gray-900 h-full pt-20'>
                    <div className='max-w-[1280px] m-auto'>
                        <p className='font-bold text-white text-3xl pb-8 pt-10'>3D打印</p>
                        <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                            3D打印能够实现复杂结构的快速成型，因此在航空航天、医疗、汽车、模具制造等领域得到了广泛应用。
                        </p>
                        <button className='mt-10 p-[3px] relative'>
                            <div
                                className='cursor-pointer absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                            <div
                                className='cursor-pointer px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
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
                                    <tr className='border-b transition-colors hover:bg-gray-300 border-gray-300'>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>名字</th>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>描述</th>
                                        <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>类型</th>
                                    </tr>
                                    </thead>
                                    <tbody className='border-0'>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>黑色树脂
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>树脂
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>LEDO 6060
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>树脂
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>PA12
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>尼龙
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>PA12-CF
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>工程塑料
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>ASA
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>工程塑料
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>ABS
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>工程塑料
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>PETG
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>工程塑料
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>PLA
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>工程塑料
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>TPU
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>工程塑料
                                            </div>
                                        </td>

                                    </tr>
                                    <tr className='border-b border-gray-300 transition-colors hover:bg-gray-300 h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>PEEK
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>-
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>工程塑料
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
                            <p className='md:text-4xl font-bold text-center'>3D 打印服务介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                我们提供最先进的原型制作服务，保证一致的质量和快速的交货时间。我们与强大的制造商网络合作，运营着
                                2,400 多台 3D
                                打印机，这意味着我们可以确保有竞争力的价格和快速的交货时间。凭借我们的全球网络和多样化的能力，我们可以生产具有各种材料和特性、各种生产方法的零件。我们专注于行业标准的
                                3D 打印工艺，包括 FDM、SLA、SLS 和 MJF，为您提供定制 3D
                                打印项目所需的一切，包括快速原型制作和工业应用。立即与我们合作，访问我们的全球3D 打印供应链。
                            </p>
                        </div>
                        <div className='p-12 w-1/2 border rounded border-gray-300'>
                            <p className='md:text-4xl font-bold text-center'>3D 打印定制介绍</p>
                            <p className='text-base text-justify leading-8 pt-8'>
                                我们的服务使设计师和工程师能够为航空航天、汽车、国防、工业自动化、机械、制造、医疗设备、硬件设置、能源和机器人等行业的许多应用创建定制的 3D 打印部件。我们使用机器学习算法将 CAD 文件转换为定制零件的报价，确保您的设计在到达制造合作伙伴之前具有可制造性。我们的平台提供适合生产零件的各种材料和技术，包括某些 3D 打印方法的后处理选项。
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