import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function PowderCoating() {
    return(
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8'>表面喷砂-工艺简介</p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                喷砂可以清洁和平整定制零件的表面，从而提高功能和外观质量。它通过在组件上施用高压玻璃珠，在机加工零件上留下均匀的哑光或缎面纹理。可根据要求提供单独的装饰选项。
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
                <div className='items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'></h3>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border-gray-300 transition-opacity opacity-100 '></div>
                        <div className='relative w-full overflow-auto '>
                            <table className='w-full caption-bottom text-sm '>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>表面处理</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>颜色</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>光泽度</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>厚度</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>外观</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>加工后 (Ra 3.2μm / Ra 126μin)
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>白色、黑色、RAL 和 Pantone
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>光泽 (70 GU 以上)</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>加工后 (Ra 3.2μm / Ra 126μin)
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>白色、黑色、RAL 和 Pantone
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>哑光 (30 GU 以下)</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>粉末涂料的颜色选择</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/4'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6'>
                                黑色的
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/1-1.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-1 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>黑色的</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/4'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6'>
                                白色的
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/1-2.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>白色的</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/4'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6'>
                                RAL 颜色
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/1-3.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>RAL 颜色</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/4'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6'>
                                Pantone 颜色
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/1-4.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>Pantone 颜色</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>粉末涂料的光泽度选择</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                柔滑哑光
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/2-1.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[100%]'>
                                            <p className='font-bold text-3xl flex'>柔滑哑光</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>16 至 25 个单位</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>
                                光滑
                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/2-2.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[100%]'>
                                            <p className='font-bold text-3xl'>光滑</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>80 至 95 个单位</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>粉末涂层部件示例</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>

                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/3-1.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-1 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'></p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>

                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/PowderCoating/3-2.png'/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'></p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            粉末涂料的设计考虑因素
                        </h4>
                    </div>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            悬挂和夹具标记
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            粉末喷涂涉及通过“夹具”或“架子”悬挂部件。这会在无法进行粉末喷涂的部件上留下标记。如果有些区域不能接受“夹具”标记，请记得附上一张标明这些区域的技术图纸。
                        </p>
                    </div>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            遮蔽
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            请记住在 CAD 文件中指出您是否希望遮蔽或堵塞特定零件区域。由于在粉末喷涂过程中材料被应用到表面，因此所有螺纹孔和铰孔或其他对功能至关重要的表面都按标准进行堵塞或遮蔽。
                        </p>
                    </div>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            公差
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            在涂层完成之前满足公差。我们建议您根据需要询问有关遮蔽的说明。
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  py-16 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                                 className='h-full w-full object-cover scale-[1.15] text-transparent object-contain'
                                                 src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/BlackOxide/2-1.jpg'/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <div className='text-4xl leading-[3.2rem] font-bold mb-5'>
                                <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>燧研喷砂工艺</h5>
                                <p className='text-lg leading-9 text-black/80 text-justify'>
                                    粉末涂层是一种坚固、耐磨的表面处理剂，与所有金属材料兼容。粉末涂料的应用方法如下：清洁零件以去除无机污染物 为提高性能和质量，用转化涂层对零件进行预处理 在烤箱中冲洗并烘干零件 遮盖关键区域以防止出现公差问题 用静电喷枪涂覆零件 在烤箱中烘干零件以固化涂层
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