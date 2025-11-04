import Nave from "@/app/Nave";
import {Button} from "antd";
import Bottom from "@/app/Bottom";
import React from "react";
import ScrollButton from "@/app/ScrollButton";

export default function MassProductionOrderService() {
  return (
      <div>
          <div>
              <Nave/>
          </div>
          <div className='bg-white pb-16 px-10 xl:px-0'>
              <div className='w-full flex'>
                  <div className='float-left'>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="Img" loading="lazy" width="700" height="650" decoding="async" data-nimg="1"
                           className='h-full text-transparent'
                           src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/MassProductionOrderService/banner.png"/>
                  </div>
                  <div className='bg-gray-900 h-auto pt-20 pl-15 float-right w-full'>
                      <p className='font-bold text-white text-3xl pb-8 h-auto'>
                          一站式批量生产
                      </p>
                      <p className='text-white  font-light text-base text-justify leading-8'>
                          优化最终用途部件生产订单的成本、数量和质量控制。
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
                                               src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/MassProductionOrderService/infos.png"/>
                                      </div>
                                      <div
                                          className='text-white absolute bottom-6 left-6 z-40 opacity-0 transform-none'></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='w-[55%]'>
                          <h5 className='text-4xl leading-[3.2rem] font-bold mb-5'>大批量生产介绍</h5>
                          <p className='text-lg leading-9 text-black/80 text-justify'>
                              除了原型设计，我们还提供全面生产支持。我们的专家通过我们的制造合作伙伴网络管理您的项目，为您带来有竞争力的价格和显著的规模经济。按需生产是一种经济高效的扩展方式，可让您根据需要构建库存。我们可以生产多达 100 万个零件，或者您的订单可以包含较小数量的多个订单项目 - 我们可以灵活地满足您的需求。
                          </p>
                      </div>
                  </div>
              </div>
              <div className='py-20'>
                  <div className='w-full mx-auto text-center'>
                      <p className='font-bold text-xl md:text-5xl dark:text-white text-black'>
                          平台使用流程
                      </p>
                      <div className='relative py-14 pb-24'>
                          <div>
                              <img alt="Img" loading="lazy" width="1300" height="830" decoding="async" data-nimg="1"
                                   className='text-transparent m-auto'
                                   src="https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/home/liucheng.png"/>
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
  );
}