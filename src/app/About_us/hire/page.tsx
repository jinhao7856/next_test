import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import Image from "next/image";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function Hire() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8'>与我们一起扩展创新</p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>如果你对智能制造充满热情，渴望在技术创新的前沿大展拳脚，欢迎加入我们！我们提供优质的平台和资源，与你共同成就制造业的智能化未来！加入我们，共创智能制造未来。</p>
                            <button className='mt-10 p-[3px] relative cursor-pointer'>
                                <div
                                    className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                <div
                                    className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>获取报价
                                </div>
                            </button>
                            <p className='text-white font-light text-xs mt-5 '>
                                <i className='iconfont icon-suo mr-2 text-[12px]'></i>
                                所有上传都是安全和保密的
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <Image alt="image" loading="lazy" width="1000" height="1000"
                                                   decoding="async" data-nimg="1"
                                                   className='h-full w-full scale-[1.15] text-transparent object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/about/joinus1.jpg"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>加入我们</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>我们是一家专注于智能制造与科技创新的企业，致力于推动工业4.0的变革与发展。现因业务扩展，诚邀技术精英、研发人才及管理高手加入！无论你是深耕智能制造的技术专家，还是热爱创新的青年才俊，只要你心怀梦想、敢于突破，这里就是你实现价值的舞台。我们提供具有竞争力的薪酬、广阔的发展空间和充满活力的团队氛围。携手共进，智领未来！</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px] py-8 last:pb-16 last:pt-8 m-auto'>
                        <div className='max-w-[55%] '>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>联系信息</h5>
                            <div className='text-lg leading-9 text-black/80 '>办公地点: 浙江省宁波市鄞州区创苑路98号
                                <div>联系电话: 0574-87919101</div>
                                <div>联系邮箱: marketingmanager@sharein.cc</div>
                                <div>联系人：胡经理</div>
                            </div>
                        </div>
                        <div className='w-[45%] flex justify-end'>
                            <div className='w-[85%]'>
                                <div
                                    className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div
                                            className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <Image alt="image" loading="lazy" width="1000" height="1000"
                                                   decoding="async" data-nimg="1"
                                                   className='h-full w-full scale-[1.15] text-transparent object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/about/joinus2.jpg"/>
                                        </div>
                                        <div
                                            className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl  pt-36 pb-20 mx-auto'>
                        <div>
                            <h4 className='text-4xl font-bold w-full text-center'>工作机会</h4>
                            <p className='w-full text-center text-xl mt-4 text-gray-500'>
                                10
                                个空缺职位
                            </p>
                        </div>
                        <div className='mt-10'>
                            <div>
                                <div className='w-full bg-gray-200 py-3.5 text-center text-xl'>项目管理</div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>客户项目专家</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>客户项目协调员</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>项目技术助理</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                            </div>
                            <div>
                                <div className='w-full bg-gray-200 py-3.5 text-center text-xl'>市场经营</div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>客户经理</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>客户经理助理</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>营销助理</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                            </div>
                            <div>
                                <div className='w-full bg-gray-200 py-3.5 text-center text-xl'>质量管理</div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>质检助理</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>质检经理</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                            </div>
                            <div>
                                <div className='w-full bg-gray-200 py-3.5 text-center text-xl'>软件工程</div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>后台开发</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
                                </div>
                                <div className='flex  hover:bg-gray-100 w-full py-3.5'>
                                    <div className='ml-4 w-9/20 text-base'>算法工程师</div>
                                    <div className='w-4/20 text-base'>宁波</div>
                                    <div className='w-4/20 text-base'>2人</div>
                                    <div className='text-orange-600 w-1/20 text-base'>面议</div>
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