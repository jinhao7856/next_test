import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import React from "react";
import ScrollButton from "@/app/ScrollButton";

export default function BlackOxide() {
    return(
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8'>氧化发黑处理-工艺简介</p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                我们提供黑色氧化涂层，这是一种用于钢、不锈钢和铜的转化涂层。黑色氧化物主要用于黑色光滑的外观和温和提高耐腐蚀性。浸渍油的黑色氧化物可以提供最高的耐腐蚀性。
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
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>适用材料</th>
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
                                        <div className='text-[14px]  text-black/80 font-bold'>钢、不锈钢、铜
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>钢、不锈钢、铜
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>0-30微米 / 0-1181微米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>光滑黑色哑光
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>黑色氧化物部件示例</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative grid gap-5 max-w-[1280px] grid-cols-2 m-auto'>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/BlackOxide/1-1.jpg"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'></p>
                                        <p className='font-normal text-sm'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/BlackOxide/1-2.jpg"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'></p>
                                        <p className='font-normal text-sm'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            黑色氧化物的设计考虑因素
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            遮蔽： 黑色氧化物不会对尺寸产生明显影响，因此不需要遮蔽零件。
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
                                <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>燧研黑色氧化工艺</h5>
                                <p className='text-lg leading-9 text-black/80 text-justify'>
                                    黑色氧化物是一种转化涂层，与钢、不锈钢和铜兼容，具有黑色外观，可轻微提高零件的耐腐蚀性。涂抹黑色氧化物的方法如下：首先对零件进行机械加工和去毛刺。使用碱性溶液清洁零件。用水冲洗。黑色氧化。将部件浸入热135-145ºC）碱浴中，时间根据部件尺寸为 5 至 40 分钟用水冲洗。后处理。用油、漆或蜡封闭氧化物表面。这赋予部件理想的美观外观，并提高部件的耐腐蚀性。
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