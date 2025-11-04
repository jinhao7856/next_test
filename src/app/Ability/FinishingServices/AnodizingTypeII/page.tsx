import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import React from "react";
import ScrollButton from "@/app/ScrollButton";

export default function AnodizingTypeII() {
    return(
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8'>阳极氧化-工艺简介
                            </p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                我们提供 II 型和 III 型阳极氧化处理，这是铝制零件的理想表面处理。阳极氧化可增强铝制部件的强度，并有多种颜色可供选择，具体取决于类型。所有类型的阳极氧化都会增加每个零件的交货时间和成本。
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
                    <div className='items-center  max-w-[1280px] py-16 m-auto'>
                        <div className='mb-10'>
                            <h3 className='text-black text-5xl font-bold mb-5 text-center'>阳极氧化类型 II</h3>
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
                                            <div className='text-[14px]  text-black/80 font-bold'>透明、黑色、红色、蓝色、橙色、金色
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>光泽 (20 GU 以上)</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>透明：8 至 12μm（0.0003” 至 0.0004”） 黑色和彩色：12 至 16μm（0.0004” 至 0.0006”）</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>零件在加工后直接进行阳极氧化处理。加工痕迹清晰可见</div>
                                        </td>
                                    </tr>
                                    <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>喷砂
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>透明、黑色、红色、蓝色、橙色、金色
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>哑光 (10 GU 以下)</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>透明：8 至 12μm（0.0003” 至 0.0004”） 黑色和彩色：12 至 16μm（0.0004” 至 0.0006”）</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>粒状纹理，哑光效果</div>
                                        </td>
                                    </tr>
                                    <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>喷砂
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>透明、黑色、红色、蓝色、橙色、金色
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>光泽 (20 GU 以上)</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>透明：8 至 12μm（0.0003” 至 0.0004”） 黑色和彩色：12 至 16μm（0.0004” 至 0.0006”）</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>颗粒纹理，光泽表面</div>
                                        </td>
                                    </tr>
                                    <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>拉丝（Ra 1.2μm / Ra 47μin）
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>透明、黑色、红色、蓝色、橙色、金色
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>光泽 (20 GU 以上)</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>透明：8 至 12μm（0.0003” 至 0.0004”） 黑色和彩色：12 至 16μm（0.0004” 至 0.0006”）</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>零件经过手工拉丝处理以减少痕迹，然后进行阳极氧化处理。拉丝线将清晰可见</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='items-center  max-w-[1280px] py-16 m-auto'>
                        <div className='mb-10'>
                            <h3 className='text-black text-5xl font-bold mb-5 text-center'>阳极氧化类型 III</h3>
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
                                            <div className='text-[14px]  text-black/80 font-bold'>黑色，自然色（较厚的层会显得更暗）
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>35 至 50μm（0.0013” 至 0.0019”）</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>零件在加工后直接进行阳极氧化处理。加工痕迹清晰可见</div>
                                        </td>
                                    </tr>
                                    <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>喷砂处理（玻璃珠 #120）
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>黑色，自然色（较厚的层会显得更暗）
                                            </div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>35 至 50μm（0.0013” 至 0.0019”）</div>
                                        </td>
                                        <td className='p-2 align-middle'>
                                            <div className='text-[14px]  text-black/80 font-bold'>如果部件“非装饰性”，则可能略微可见；如果部件“装饰性”，则可完全去除
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>铝阳极氧化 II 型颜色选项</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative grid gap-5 max-w-[1280px] grid-cols-4 m-auto'>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>黑色（黑色 MLW）
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/1-1.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>黑色（黑色 MLW）</p>
                                        <p className='font-normal text-sm'>类似于：RAL 9004，Pantone Black 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>清除
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/1-2.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>清除</p>
                                        <p className='font-normal text-sm'>类似于：取决于材料</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>红色（红色 ML）
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/1-3.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>红色（红色 ML）</p>
                                        <p className='font-normal text-sm'>类似于：RAL 3031、Pantone 1805</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>蓝色（蓝色2LW）
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/1-4.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>蓝色（蓝色2LW）</p>
                                        <p className='font-normal text-sm'>类似于：RAL 5015、Pantone 3015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>橙色（橙色 RL）
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/1-5.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>橙色（橙色 RL）</p>
                                        <p className='font-normal text-sm'>类似于：RAL 1037，Pantone 715</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>金（金4N）
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/1-6.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>金（金4N）</p>
                                        <p className='font-normal text-sm'>类似于：RAL 1012、Pantone 612</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>铝阳极氧化 III 型颜色选项</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative grid gap-5 max-w-[1280px] grid-cols-2 m-auto'>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>黑色的
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/2-1.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <p className='font-bold text-xl'>黑色的</p>
                                        <p className='font-normal text-sm'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>清除
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/2-2.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <p className='font-bold text-xl'>清除</p>
                                        <p className='font-normal text-sm'>（较厚的层会显得更暗）</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>阳极氧化部件示例</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative grid gap-5 max-w-[1280px] grid-cols-2 m-auto'>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>黑色的
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/3-1.jpg"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <p className='font-bold text-xl'>黑色的</p>
                                        <p className='font-normal text-sm'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div
                                className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>清除
                            </div>
                            <div
                                className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/3-2.jpg"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <p className='font-bold text-xl'>清除</p>
                                        <p className='font-normal text-sm'>（较厚的层会显得更暗）</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>
                        阳极氧化部件图库
                    </h3>
                    <div className='flex justify-items-center w-full h-[210px]'>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-1.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-2.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-3.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-4.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-5.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-1.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-2.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-3.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-4.jpg"/>
                        <img alt="thumbnail" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/AnodizingTypeII/4-5.jpg"/>
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