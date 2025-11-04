import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function BeadBlasting() {
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
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>喷砂规格</h3>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border-gray-300 transition-opacity opacity-100 '></div>
                        <div className='relative w-full overflow-auto '>
                            <table className='w-full caption-bottom text-sm '>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>适用材料</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>素材</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>外观</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>铝、铜、低碳钢、钛、黄铜、合金钢、不锈钢、工具钢
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>玻璃珠粒号#120
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>粒状，略带哑光的纹理。对于“非装饰性”选项，加工痕迹会减少，而对于“装饰性”选项，主要表面上的加工痕迹会完全去除。</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl '>喷砂处理部件示例</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute z-20 text-white font-bold text-3xl left-6 bottom-6 group-hover:hidden'>

                            </p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-blackhttps://www.quicklyre.com/details?code=BeadBlasting'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/BeadBlasting/1-1.jpg'/>
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
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-blackhttps://www.quicklyre.com/details?code=BeadBlasting'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent-contain'
                                             src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/BeadBlasting/1-2.jpg'/>
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
                            喷砂表面处理是如何工作的？
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            喷砂工艺使用磨料玻璃珠对金属进行喷砂，使金属表面光滑。磨料玻璃珠从喷砂工具中以高压喷出。较大、较粗的玻璃珠可使金属表面呈现颗粒状、哑光质感，而较小的玻璃珠可使金属表面呈现缎面效果。喷砂工艺适用于多种硬质金属，是机械加工后抛光和去毛刺零件的有效方法。燧研提供金属部件喷砂服务，以改善其功能和外观。
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
                                                 src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/BeadBlasting/2-1.jpg'/>
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
                                    燧研对你的定制部件进行喷砂处理的方法如下：首先使用 CNC 机床制造零件。操作员在加工后立即将零件送至喷砂机。用玻璃介质（粒度#120）对部件进行喷砂
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