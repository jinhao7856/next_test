import Bottom from "@/app/Bottom";
import Nave from "@/app/Nave";
import {Button} from "antd";
import React from "react";
import ScrollButton from "@/app/ScrollButton";


export default function SLA_3DPrinting() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8'></p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                通过我们的SLA
                                3D打印服务，您可以轻松获取高性能部件，无论是复杂结构的模型制作还是小批量生产件的制造，燧研智算都能满足您的需求。我们提供丰富多样的工业级树脂材料选择，包括高强度工程塑料、透明光学树脂等多种类型，确保满足不同场景的应用要求。下单后最快24小时内即可完成打印交付。
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
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLA_1.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>工艺详细介绍</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                SLA（光固化）3D打印技术是一种高精度、细节丰富的增材制造工艺，适用于复杂结构及精细表面处理。通过激光光源精准固化液态树脂，逐层构建模型，确保产品具有卓越的尺寸精度和光滑度。无论是原型制作还是小批量生产，SLA
                                3D打印都能满足您的需求，助力您快速实现从设计到实物的转化。
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>原型和工业工艺对比</h3>
                        <p className='text-black/80  text-center'>FDM 3D 打印分为两个不同的类别：原型制作FDM 和工业
                            FDM</p>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                        <div className='relative w-full overflow-auto'>
                            <table className='w-full caption-bottom text-sm'>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '></th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>最大构建大小</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>标准交货时间</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>尺寸精度</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>层高</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>填充物</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>原型设计SLA</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>145 × 145 × 175 毫米（5.7 英寸 x 5.7 英寸 x 6.8 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>3个工作日起</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>± 0.3%，下限± 0.3 毫米（± 0.012 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>50-100 微米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>0.2 毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>工业SLA</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>500 x 500 x 500 毫米（19.68 英寸 x 19.68 英寸 x 19.68 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>3个工作日</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>± 0.2%，下限± 0.13 毫米（± 0.005 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>50-100 微米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>0.2 毫米</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>提供材料</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                原型制作SLA材料
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div
                                        className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10  transition duration-200'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent '
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLA_2.png'/>
                                    </div>
                                    <div
                                        className='text-white absolute bottom-6 left-6 z-40  opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>原型制作SLA材料</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>
                                                标准树脂：适合快速成型和高精度细节展示。耐高温树脂：适用于需要承受高温环境的零件。透明树脂：呈现光学级透明效果，适合展示内部结构。刚性树脂：具备高强度和耐用性，适合功能性原型测试、开发。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                工业 SLA 材料
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover:block hidden absolute inset-0 w-full h-full bg-black/40 z-10'></div>
                                    <div
                                        className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10 transition duration-200'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLA_3.png'/>
                                    </div>
                                    <div
                                        className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>工业 SLA 材料</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>
                                                耐高温树脂：适用于高温环境下的精密零件制造；高强度树脂：适合需要高机械性能的应用场景；透明树脂：满足光学或展示类产品的制作需求；抗老化树脂：确保长期使用的稳定性和耐用性。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>成型工艺对比</h3>
                        <p className='text-black/80  text-center'></p>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                        <div className='relative w-full overflow-auto'>
                            <table className='w-full caption-bottom text-sm'>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '></th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>尺寸精度</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>优势</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>构建体积</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>层厚</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>最小特质尺寸</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>FDM</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>±0.5%，下限为±0.5毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>成本低，材料范围广</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>500x500x500
                                            毫米（19.68英寸x19.68英寸x19.68英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>100-300微米</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>22.0毫米（0.0787 英寸）</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>工业FDM</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>±0.3%，下限±0.3毫米（±0.012 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>高水平的可重复性，工程级材料</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>406x355x406毫米（15.98英寸x13.97英寸x15.98
                                            英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>100-300微米</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>2.0毫米（0.0787英寸）</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>原型SLA</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>± 0.3%，下限± 0.3 毫米（± 0.012 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>光滑的表面光洁度，精细的特征细节
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>145 × 145 × 175 毫米（5.7 英寸 x 5.7
                                            英寸 x 6.8 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>50-100微米</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>0.2 毫米 （0.00787 英寸）</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>工业 SLA</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>± 0.2%，下限± 0.13 毫米（± 0.005 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80'>光滑的表面光洁度、精细的特征细节、大打印区域
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>500 x 500 x 500 毫米（19.68 英寸 x
                                            19.68 英寸 x 19.68 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>50-100微米</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>0.2 毫米 （0.00787 英寸）</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>SLS 系列</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>± 0.3%，下限± 0.3 毫米（± 0.012 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>设计灵活，不需要支撑</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>
                                            395 x 500 x 395 毫米（15.53 英寸 x 19.68 英寸 x 15.53 英寸）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>100微米</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80'>0.5 毫米（0.0196 英寸）</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/FDM_4.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>我们的标准</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                我们根据严格的制造标准制造您的定制零件，并确保所有零件和流程都符合标准。我们对这些要求的全面验证包含在我们随每个订单发货的检验报告中。采用国际认证的优质材料，结合高精度打印机，确保模型细节完美呈现。专业团队全程监控生产过程，严格控制公差范围，确保每一处细节都符合预期。依托先进的设备和成熟的工艺，我们承诺在规定时间内完成交付，助力您的项目快速推进。
                            </p>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>优缺点</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                优点
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10'></div>
                                    <div
                                        className='h-full w-full relative bg-gray-50 dark:bg-black transform-none group-hover:translate-x-10  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLA_5.png'/>
                                    </div>
                                    <div
                                        className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>优点</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>
                                                成本低：材料价格亲民，适合初期设计验证和小批量生产。操作简单：设备普及度高，易于上手和维护。适用性强：支持多种材料（如PLA、ABS等），能制作复杂结构。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                缺点
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10'></div>
                                    <div
                                        className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full  scale-[1.15] text-transparent object-cover'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLA_6.png'/>
                                    </div>
                                    <div
                                        className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>缺点</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>
                                                成本较高：设备和耗材价格昂贵，不适合小规模生产；支撑结构复杂：需设计复杂的支撑结构，增加了后期处理难度；易脆性：成品强度相对较低，不适合承受较大应力的场景。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>指南</h3>
                        <p className='text-black/80  text-center'>该表总结了 FDM 3D
                            打印部件中最常见的特征的推荐和技术上可行的值。</p>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                        <div className='relative w-full overflow-auto'>
                            <table className='w-full caption-bottom text-sm'>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle text-muted-foreground '>特征</th>
                                    <th className='h-10 px-2 text-left align-middle text-muted-foreground '>推荐尺寸</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>无支撑墙</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>0.8 毫米（0.0315 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>支撑墙</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>0.8 毫米（0.0315 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>最小特征大小</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>2.0 毫米（0.0787 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>最小孔径</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>2.0 毫米（0.0787 英寸）
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-15'>其他工艺跳转</h3>
                    <div className='flex items-center justify-between space-x-8'>
                        <div className='overflow-hidden group/card relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div
                                    className='h-full w-full relative  bg-white group-hover:translate-x-10  transition duration-500'>
                                    <img alt="image" loading="lazy" width="500" height="220" decoding="async"
                                         className='h-[200px] w-full object-cover scale-[1.15] text-transparent'
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/FDM.png'/>
                                    <div className='h-[300px] p-8 bg-gray-50'>
                                        <p className='font-bold text-2xl mb-4 py-2'>FDM系列</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                快速且经济实惠的原型设计
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                尺寸精度为 ± 0.5%，下限为 ± 0.5 mm
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                交货时间从 1 个工作日起
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
                        <div className='overflow-hidden group/card relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div
                                    className='h-full w-full relative  bg-white group-hover:translate-x-10  transition duration-500'>
                                    <img alt="image" loading="lazy" width="500" height="220" decoding="async"
                                         className='h-[200px] w-full object-cover scale-[1.15] text-transparent'
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/SLS.png'/>
                                    <div className='h-[300px] p-8 bg-gray-50'>
                                        <p className='font-bold text-2xl mb-4 py-2'>SLA 系列</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                功能性原型制作和小批量生产
                                            </p>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                尺寸精度为 ± 0.1%，下限为 ± 0.1 毫米（± 0.004 英寸）
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