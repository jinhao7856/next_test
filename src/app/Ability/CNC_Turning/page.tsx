import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import React from "react";
import ScrollButton from "@/app/ScrollButton";

export default function CNC_Turning(){
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
                                通过我们先进的 CNC 车削专家网络，采购 50 多种不同金属和塑料的高性能零件。提供严格的公差，低至 ±.0008
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
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>什么是数控车削？？</h4>
                        <p className='text-lg text-black/80 leading-9'>
                            CNC 车削通过将毛坯安装在旋转卡盘上并使用固定切削工具去除材料来生产零件。该技术非常适合制造沿中心轴对称的零件。车削零件通常比铣削零件生产得更快（且成本更低）。
                        </p>
                    </div>
                </div>
                <div className='items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>CNC 车削的最大零件尺寸</h3>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border-gray-300 transition-opacity opacity-100 '></div>
                        <div className='relative w-full overflow-auto '>
                            <table className='w-full caption-bottom text-sm '>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>零件尺寸限制</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>公制单位</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>英制单位</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>最大零件直径
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>431 毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>17 英寸</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>最大零件长度
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>990 毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>39 英寸</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>滑架最大摆动
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>350 毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>13.7 英寸</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>主轴最大通孔
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>40 毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>1.5 英寸</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>最高转速：1700RPM，电机功率：640W
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl mb-15'>可用于 CNC 车削的材料</h3>
                    <div className='flex items-center justify-between space-x-8'>
                        <div className='overflow-hidden group/card relative flex-1 group rounded'>
                            <div className='relative h-full w-full'>
                                <div
                                    className='h-full w-full relative  bg-white group-hover:translate-x-10  transition duration-500'>
                                    <img alt="image" loading="lazy" width="500" height="220" decoding="async"
                                         className='h-[200px] w-full object-cover scale-[1.15] text-transparent'
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMaterials/wujin.png'/>
                                    <div className='h-[300px] p-8 bg-gray-50'>
                                        <p className='font-bold text-2xl mb-4 py-2'>五金</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                用于 CNC 加工的各种金属，应用于多个行业。非常适合一次性原型和最终用途定制部件。
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
                                         src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMaterials/suliao.png'/>
                                    <div className='h-[300px] p-8 bg-gray-50'>
                                        <p className='font-bold text-2xl mb-4 py-2'>塑料</p>
                                        <div className='space-y-2 h-[140px]'>
                                            <p className='text-black/80 text-base'>
                                                <i className='iconfont icon-gou mr-2 text-[12px]'></i>
                                                用于 CNC 加工的各种塑料，应用于多个行业。非常适合一次性原型和最终用途定制部件。
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
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  py-16 m-auto'>
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
                                                 className='h-full w-full scale-[1.15] text-transparent object-fill'
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMaterials/bmgjd.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>CNC 车削表面处理</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                通过选择可改善成品组件的粗糙度、硬度、耐化学性和外观特征的表面光洁度来提高零件性能。
                            </p>
                        </div>
                    </div>
                </div>
                <div className='items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>CNC 车削公差</h3>
                        <p className='text-black/80  text-center'>我们遵循 ISO 2768 数控加工标准。</p>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border-gray-300 transition-opacity opacity-100 '></div>
                        <div className='relative w-full overflow-auto '>
                            <table className='w-full caption-bottom text-sm '>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50 '>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>公称尺寸限值</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>塑料（ISO 2768- m）</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>金属 (ISO 2768- f)</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>0.5 毫米*至 3 毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.1毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.05毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>3mm以上至6mm
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.1毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.05毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>6mm以上至30mm
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.2毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.1毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>30mm以上至120mm
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.3毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.15毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>120mm以上至400mm
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.5毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.2毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>400mm以上至1000mm
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.8毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.3毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>1000mm以上至2000mm
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±1.2毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>±0.5毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>*请在技术图纸上清楚地标明0.5毫米以下的标称尺寸的公差。
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='items-center  max-w-[1280px] py-16 m-auto'>
                    <div className='mb-10'>
                        <h3 className='text-black text-5xl font-bold mb-5 text-center'>CNC 车削设计指南</h3>
                        <p className='text-black/80  text-center'>检查推荐值和技术上可行的值，了解使用精密 CNC 车削生产的零件的最常见特征。</p>
                    </div>
                    <div className='p-10 border rounded relative'>
                        <div
                            className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border-gray-300 transition-opacity opacity-100 '></div>
                        <div className='relative w-full overflow-auto '>
                            <table className='w-full caption-bottom text-sm '>
                                <thead>
                                <tr className='border-b transition-colors hover:bg-muted/50'>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>特征</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>推荐尺寸</th>
                                    <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>可行规模</th>
                                </tr>
                                </thead>
                                <tbody className='border-0'>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>最小特征尺寸
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>Ø 2.5 毫米</div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>Ø 0.50 毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>内部边缘
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>R8 毫米
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>R0.25 毫米</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>最小壁厚
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>0.8 毫米（适用于金属）1.5 毫米（适用于塑料）
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>0.5 毫米（适用于金属）1.0 毫米（适用于塑料）</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>洞
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>直径：标准钻头尺寸。深度：4 x 直径
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>直径：Ø 0.5 深度：10 x 直径</div>
                                    </td>
                                </tr>
                                <tr className='border-b transition-colors hover:bg-muted/50 h-16'>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>线程
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>
                                            尺寸：M6 或更大 长度：3 x 直径
                                        </div>
                                    </td>
                                    <td className='p-2 align-middle'>
                                        <div className='text-[14px]  text-black/80 font-bold'>尺寸：M2</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  py-16 m-auto'>
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
                                                 className='h-full w-full scale-[1.15] text-transparent object-fill'
                                                 src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMaterials/cxbz.png"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>我们对 CNC 车削有很高的标准</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                我们严格按照国际标准提供高品质的CNC车削服务。我们的加工设备采用高精度数控技术，确保每一处细节都精准无误。有几种表面处理可用于提高加工后零件的外观质量。每个定制零件都由我们的制造合作伙伴根据我们的指导方针进行现场检查。可根据要求提供检验报告和其他类型的质量文件，以确保最高的质量和合规性。
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