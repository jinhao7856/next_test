import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import React from "react";
import ScrollButton from "@/app/ScrollButton";

export default function FinishingServices() {
  return (
    <div>
        <div>
            <Nave/>
        </div>
        <div className='bg-white pb-16 px-10 xl:px-0'>
            <div>
                <div className='px-40 bg-gray-900 h-full pt-20'>
                    <div className='max-w-[1280px] m-auto'>
                        <p className='font-bold text-white text-3xl pb-8'>工艺简介</p>
                        <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                            采购定制零件的最简单方法，具有 15+ 表面处理选项。对您的零件进行喷砂、阳极氧化或粉末涂层。
                        </p>
                        <button className='mt-10 p-[3px] relative'>
                            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                            <div className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
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
            <div className=' items-center  max-w-[1280px] py-16 m-auto'>
                <div className='mb-10'>
                    <h3 className='text-black text-5xl font-bold mb-5 text-center'></h3>
                    <p className='text-black/80  text-center'></p>
                </div>
                <div className='p-10 border rounded relative'>
                    <div
                        className='pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity opacity-100'></div>
                    <div className='relative w-full overflow-auto'>
                        <table className='w-full caption-bottom text-sm'>
                            <thead>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                                <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>表面光洁度技术</th>
                                <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>服务</th>
                                <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>适用于</th>
                                <th className='h-10 px-2 text-left align-middle font-medium text-muted-foreground '>公差影响</th>
                            </tr>
                            </thead>
                            <tbody className='border-0'>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>原始机加工</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工、钣金制造
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>金属、塑料</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>公差不受影响
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>表面平滑度处理</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>金属、塑料</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>公差不受影响
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>阳极氧化</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工、钣金制造
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>铝</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>阳极氧化后
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>表面喷砂</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工、钣金制造
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>金属</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>除特定功能外不受影响
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>抛光表面</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>金属</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>抛光后
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>氧化发黑处理</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工、钣金制造
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>铜、不锈钢、合金钢、工具钢、低碳钢</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>涂装后
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>粉末喷涂处理</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工、钣金制造
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>金属</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>粉末喷涂前
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>电镀处理</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>CNC 加工、钣金制造
                                    </div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>金属、塑料</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>工件形状
                                    </div>
                                </td>
                            </tr>
                            <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-16'>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80 font-bold'>不锈钢钝化处理</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>钣金制造</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>金属</div>
                                </td>
                                <td className='p-2 align-middle'>
                                    <div className='text-[14px]  text-black/80'>钝化处理后
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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