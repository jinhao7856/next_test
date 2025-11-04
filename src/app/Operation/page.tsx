import React from 'react';
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button} from "antd";
import Image from "next/image";
import ScrollButton from "@/app/ScrollButton";

function HowToOrder() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8 pt-10'>直接快速报价</p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                即时获取专业报价方案，享受免费设计优化建议；提供100多种材料选择及丰富多样的表面处理组合，满足不同应用场景需求；24小时内交付，从概念到实物，快速实现高质量原型打样和最终零件制作。
                            </p>
                            <button className='mt-10 p-[3px] relative'>
                                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                <div className='px-8 py-2 w-full bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent cursor-pointer'>
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
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>即时报价</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>上传文件</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        选择您需要的零疗件加工制造工艺，并上传您的 CAD 文件。我们会在48小时内跟据您提供的资料提供报价，并且所有上传的资料都是安全和保密的。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/jishibaojia_1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>即时看到价格</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        我们为您提供快速报价和灵活的制造解决方案。在短短几秒内即可获取精准的报价。我们的平台支持全国的加工订单，确保满足您的多样化加工需求。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/jishibaojia_2.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto '>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>编辑详细参数</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        您可以灵活调整加工参数、材料类型以及公差要求和后加工需求，并且实时获取精准报价。无论您需要哪种定制化解决方案，我们都将为您提供专业、透明的技术支持。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="thumbnail" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem]'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/jishibaojia_3.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className='w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[20rem] object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/youhuasheji.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transition-all duration-200 ease-out'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>优化设计</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                我们的可制造性设计（DFM）工具能够深入分析您的制造设计方案，并提供专业的优化建议，助您有效降低成本、缩短生产周期并提升产品质量。通过智能化的分析功能，我们帮助您在设计阶段就实现制造可行性与成本效益的最佳平衡。
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px] py-8 false m-auto'>
                        <div className='max-w-[55%] '>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>团队协作</h5>
                            <p className='text-lg leading-9 text-black/80'>
                                我们的团队账户功能专为高效协作设计，让您的团队能够轻松地共同完成报价与采购流程。所有订单都可在同一平台上集中管理，确保操作便捷、信息透明。无论是跨部门合作还是跨国项目，我们都能为您提供无缝衔接的协作体验，助力团队生产力最大化。
                            </p>
                        </div>
                        <div className='w-[45%] flex justify-end'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[20rem] object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/tuanduixiezuo.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transition-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[20rem] object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/suodingjiage.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transition-all duration-200 ease-out'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>锁定价格</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                我们承诺为您的订单提供价格锁定制，确保在接下来的30天内享有稳定的价格保障，无论市场行情如何变化。无论是当前订单还是未来采购，我们都将为您提供灵活多样的支付解决方案。为了进一步提升合作效率，我们可以协助您将燧研智算快速设置为官方供应商，并支持通过标准采购订单进行结算。这不仅简化了付款流程，也确保了交易的规范性和安全性，让您的每一步操作都更加便捷高效。
                            </p>
                        </div>
                    </div>
                </div>
                <div className='py-16 max-w-[1280px] m-auto'>
                    <h3 className='w-full text-center text-black/90 font-bold text-5xl'>无缝生产对接</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-16'>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto'>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>供应商</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        我们的平台将您的订单与来自我们值得信赖的专业制造商相匹配，该制造商拥有专业的工作知识。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem] object-contain'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/wfdj_2.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto'>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>质量保证</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        我们已通过 ISO-9001 认证，并拥有严格的质量管理体系，以确保您的零件完全符合您的规格。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem] object-contain'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/wfdj_1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center perspective-[1000px]'>
                            <div className='flex items-center justify-center relative transition-all duration-200 ease-linear w-1/4 xl:w-1/5 inter-var flex-auto'>
                                <div className='[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                                    <div className='w-fit transition duration-200 ease-linear text-xl font-bold text-black dark:text-white'>跟踪订单</div>
                                    <p className='w-fit transition duration-200 ease-linear text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                                        我们全权负责按时交付您的零件。如果有任何延误，我们将与您联系并计划尽快将您的零件送到您手中。
                                    </p>
                                    <div className='transition duration-200 ease-linear w-full mt-4'>
                                        <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[10rem] object-contain'
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/wfdj_3.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[20rem] object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/zhuanjiaxiezhu.jpeg"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transition-all duration-200 ease-out'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>专家协助</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                在流程的任何阶段，我们的技术人员和机械工程师都可以为您的项目提供建议。
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px] py-8 false m-auto'>
                        <div className='max-w-[55%] '>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>快速交货</h5>
                            <p className='text-lg leading-9 text-black/80'>
                                我们为您带来世界上最全面的制造解决方案，合作的供应商通过自动化内部机器提供快速制造，以实现业内最快的交货时间。
                            </p>
                        </div>
                        <div className='w-[45%] flex justify-end'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[20rem] object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/kuaisujiaohuo.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transition-none'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between max-w-[1270px]  first:pt-16 first:pb-8 false m-auto'>
                        <div className='w-[45%]'>
                            <div className='w-[85%]'>
                                <div className='h-60 bg-transparent rounded-lg overflow-hidden group/card relative md:h-[18rem]'>
                                    <div className='relative h-full w-full'>
                                        <div className='group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500'></div>
                                        <div className='h-full w-full relative bg-gray-50 dark:bg-black transform-none'>
                                            <img alt="image" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className=' w-full  object-cover rounded-xl group-hover/card:shadow-xl text-transparent h-[20rem] object-contain'
                                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/howtoOrder/piliangzhizao.png"/>
                                        </div>
                                        <div className='text-white absolute bottom-6 left-6 z-40 opacity-0 transition-all duration-200 ease-out'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[55%]'>
                            <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>按需批量制造</h5>
                            <p className='text-lg leading-9 text-black/80 text-justify'>
                                我们能够规划您的零件生产，全年分批进行，价格与交货时间均固定不变。倘若您后续需要更多零件，也可一次性重新下单订购。如此安排，给予您十足的灵活性，使您无需预先为零件筹备资金，也不必操心零件库存的存储问题。
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

export default HowToOrder;