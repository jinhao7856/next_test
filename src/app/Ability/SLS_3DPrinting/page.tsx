import Bottom from "@/app/Bottom";
import Nave from "@/app/Nave";
import React from "react";
import ScrollButton from "@/app/ScrollButton";

export default function SLS_3DPrinting(){
    return(
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
                                选择性激光烧结（SLS）3D打印技术，助力您轻松实现原型制造与高效生产。我们提供工业级材料和多种表面处理方案，满足您的精准定制需求。从设计到交付，仅需3个工作日！
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
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLS_1.png"/>
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
                                SLS（选择性激光烧结）是一种先进的3D打印技术，通过高能激光束将粉末材料逐层烧结成型。SLS技术无需传统模具限制，可直接制作复杂几何形状和内部结构,并且支持多种金属粉末及高性能尼龙材料，满足不同应用场景需求,从设计到成品，能够大幅缩短生产周期，有助力高效研发与小批量生产。
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>原型和工业工艺对比</h3>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                        <div className='relative w-full overflow-auto'>
                            <table className='w-full caption-bottom text-sm'>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>最大构建大小</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>标准交货时间</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>尺寸精度</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>层厚</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>填充物</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>395 x 500 x 395 毫米（15.53 英寸 x 19.68 英寸 x 15.53 英寸）</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>3 个工作日
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>± 0.3%，下限为 ± 0.3 毫米（± 0.012 英寸）</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>100微米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>0.5 毫米（0.0196 英寸）</div>
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
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLS_2.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>SLS 3D 打印使用坚固的粉末材料，非常适合功能性原型制造和最终用途部件的中小批量生产。</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                快速原型制作和模具制造：尼龙粉末（PA）是最佳选择，因其成本低、打印速度快且性能稳定。高性能工业零件：金属粉末（如不锈钢、铝合金）或碳纤维增强复合材料是理想选择。高温和化学抗性要求：聚醚酮（PEKK）或陶瓷粉末是适合的材料。轻量化设计：尼龙玻纤增强材料（PA + Glass Beads）是首选。
                            </p>
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
                                                 className='h-full w-full object-cover scale-[1.15] text-transparent'
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
                                我们根据严格的制造标准制造您的定制零件，并确保所有零件和流程都符合标准。我们对这些要求的全面验证包含在我们随每个订单发货的检验报告中。打印后，零件经过喷砂处理，然后进行空气喷砂处理，以去除表面多余的粉末。可以进行额外的后处理以改善零件的外观，例如染色、蒸汽平滑或翻滚。
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
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black  group-hover:translate-x-10  transition duration-500 '>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLS_4.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>优点</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>成本低：材料价格亲民，适合初期设计验证和小批量生产。操作简单：设备普及度高，易于上手和维护。适用性强：支持多种材料（如PLA、ABS等），能制作复杂结构。</p>
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
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DPrinter/SLS_5.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>缺点</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>精度有限：层间分辨率较低，不适用于细节非常小的部件。速度慢：打印时间较长，不适合大批量生产。材料限制：虽种类丰富，但强度和耐高温性有限。</p>
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
                        <p className='text-black/80  text-center'>该表总结了 SLS 3D 打印部件中最常见的特征的推荐值和技术上可行的值
                        </p>
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
                                            className='text-[14px]  text-black/80 '>1.0 毫米（0.040 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>支撑墙</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>0.8 毫米（0.031 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>最小细节大小</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>0.8 毫米（0.031 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>最小孔径</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>1.0 毫米（0.040 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>活动部件</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>0.5 毫米（0.020 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>装配间隙</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>0.4 毫米（0.016 英寸）
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 '>最大壁厚</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div
                                            className='text-[14px]  text-black/80 '>20 毫米（0.8 英寸）
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