import React from 'react';
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import ScrollButton from "@/app/ScrollButton";


function SheetMetalProcessingServices() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-full flex'>
                    <div className=' float-left'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="Img" loading="lazy" width="700" height="650" decoding="async" data-nimg="1"
                             className='h-full text-transparent'
                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/3DprintingServices/banner_1.png"/>
                    </div>
                    <div className='bg-gray-900 h-full pt-20 pl-15 float-right'>
                        <p className='font-bold text-white text-3xl pb-8 h-full'>
                            一站式钣金加工服务
                        </p>
                        <p className='text-white  font-light w-[68%] text-base text-justify leading-8'>
                            钣金加工是指对薄板材料（厚度通常在几毫米以内）进行的一系列制造过程，包括剪切、冲压、折弯、切割等技术。常见的材料有碳钢、不锈钢、铝合金等，应用领域涵盖汽车、建筑、电子设备和航空航天等多个方面。
                        </p>
                        <button className='mt-10 p-[3px] relative cursor-pointer'>
                            <div
                                className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                            <div
                                className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                                获取报价
                            </div>
                        </button>
                        <p className='text-white font-light text-xs mt-5'>
                            <i className='iconfont icon-suo  mr-2 text-[12px]'></i>
                            所有上传都是安全和保密的
                        </p>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>能力简介</h3>
                    <div className='h-auto relative flex items-center justify-center w-full gap-5 pt-16'>
                        <div className='relative group w-1/2'>
                            <p className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>激光切割</p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className='h-full w-full scale-[1.15] text-transparent object-fill'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/SheetMetalProcessingServices/jiguangqiege.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>激光切割</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>这种制造过程使用高功率激光束来切割材料片材。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group w-1/2'>
                            <p className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4 group-hover:hidden'>弯曲</p>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative'>
                                <div className='relative h-full w-full'>
                                    <div
                                        className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-10  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async"
                                             data-nimg="1"
                                             className='h-full w-full scale-[1.15] text-transparent object-fill'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/SheetMetalProcessingServices/wanqu.png"/>
                                    </div>
                                    <div
                                        className='text-white absolute bottom-6 left-6 z-40 opacity-0 group-hover/card:opacity-100 duration-500'>
                                        <div className='w-[96%]'>
                                            <p className='font-bold text-3xl'>弯曲</p>
                                            <p className='font-normal text-base leading-7 text-justify mt-3'>这种制造工艺使用模具在延展性材料中沿直线轴生产
                                                U 形、V 形或通道形状。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' items-center  max-w-[1280px] py-16 m-auto'>
                    <h3 className='text-black text-5xl font-bold mb-5 text-center'>钣金加工材料清单</h3>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                        <div className='relative w-full overflow-auto'>
                            <table className='w-full caption-bottom text-sm '>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>材料</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>类型</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>碳素钢
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>Q235</div>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>SPCC</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>合金钢
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>Q345</div>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>65Mn</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>不锈钢
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>304</div>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>316L</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>铝合金
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>5052</div>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>5754</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>铜合金
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='flex items-center gap-16'>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>HPb59-1</div>
                                            <div className='text-[14px]  text-black/80 font-bold w-auto min-w-[80px]'>H62</div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='py-16'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-16'>表面光洁度技术</h3>
                    <p className='text-center text-slate-400 w-full px-40 '></p>
                    <div className='h-auto relative grid gap-5 max-w-[1280px] grid-cols-4 m-auto'>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>喷砂</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/pensha.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>喷砂</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>刷洗/拉丝</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/shuaxilasi.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>刷洗/拉丝</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>II型喷砂+阳极氧化</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/pensha2.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>II型喷砂+阳极氧化</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>喷砂+阳极氧化II型</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/yangjiyanghua2.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>喷砂+阳极氧化II型</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>阳极氧化III型（硬涂层）</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/yangjiyanghua3.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>阳极氧化III型（硬涂层）</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>粉末涂层</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/fenmotuceng.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>粉末涂层</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>黑色氧化物</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/heiseyanghuawu.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>黑色氧化物</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative group'>
                            <div className='absolute  z-20 text-white font-bold text-xl left-4 bottom-4'>铬酸盐转化涂层</div>
                            <div className='md:h-96 h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:w-auto'>
                                <div className='relative h-full w-full'>
                                    <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                    <div className='h-full w-full relative bg-gray-50 dark:bg-black group-hover:translate-x-6  transition duration-500'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" className='h-full w-full object-cover scale-[1.15] text-transparent'
                                             src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/mingsuanyan.png"/>
                                    </div>
                                    <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        <p className='font-bold text-xl'>铬酸盐转化涂层</p>
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

export default SheetMetalProcessingServices;