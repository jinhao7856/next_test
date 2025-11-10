'use client'
import React, {useEffect, useState} from 'react';
import {Popover} from "antd";
import Login from "./Login";
import Link from "next/link";
import Image from "next/image";
import '@/app/icon/iconfont.css';


export default function Nave() {
    const [visible, setVisibled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setVisibled(true);
            } else {
                setVisibled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 清理函数，移除事件监听器
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className='bg-white fixed top-0 z-40 h-[160px] sm:h-[160px] md:h-[120px] xl:h-[60px] lg:h-[60px] w-full shadow-lg flex justify-center items-center'>
            <div className='w-full justify-items-center lg:flex lg:items-center xl:flex xl:justify-center xl:items-center '>
                {/*智算*/}
                <div className='cursor-pointer flex lg:flex lg:justify-start xl:justify-end xl:flex xl:ml-auto'>
                    <Link href='/'>
                        <Image src='https://www.sharein.cc/images/logoImg.png' alt='logo'
                               width='50' height='50'
                               className='h-7 w-auto md:h-10'></Image>
                    </Link>
                </div>
                {/*Quickly*/}
                <div className='justify-items-center w-auto relative md:flex md:justify-center lg:w-[70%] lg:items-center xl:w-auto'>
                    <div className='flex items-center'><Link href='/Quickly'>
                        <span
                            className='text-[#ff5722] font-bold cursor-pointer whitespace-nowrap pl-5'>燧言Quickly</span></Link>
                    </div>
                    {/*NAVE*/}
                    <div className='flex items-center'>
                        <div className='flex items-center lg:space-x-3 lg:px-2 xl:space-x-10 xl:px-8'>
                            <Popover content={[
                                <div className='justify-normal space-x-2 grid grid-cols-2 grid-rows-2 gap-4' key='1'>
                                    <div className='flex items-center'>
                                        <Image
                                            src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/caozuoliucheng_1.png'
                                            alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                            loading="lazy" className='rounded-sm'/>
                                        <div className='ml-2'>
                                            <Link href='/Operation'><p
                                                className='cursor-pointer space-x-10 text-base text-neutral-800 font-bold'>如何工作</p>
                                            </Link>
                                            <div className='flex items-center space-x-10'>
                                                <Link href='/Operation'><p
                                                    className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>如何下订单</p>
                                                </Link>
                                                <Link href='/Operation/user_protection'><p
                                                    className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>用户保护</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center ml-2'>
                                        <Image
                                            src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/caozuoliucheng_2.png'
                                            alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                            loading="lazy" className='rounded-sm'/>
                                        <div className='ml-2'>
                                            <Link href='/Operation/ManufacturingPartners'><p
                                                className='cursor-pointer space-x-10 text-base text-neutral-800 font-bold'>质量和一致性</p>
                                            </Link>
                                            <div className='flex items-center space-x-10'>
                                                <Link href='/Operation/ManufacturingPartners'><p
                                                    className='cursor-pointer space-x-10 text-sm text-neutral-800 hover:text-orange-400'>制造合作伙伴</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image
                                            src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/caozuoliucheng_3.png'
                                            alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                            loading="lazy" className='rounded-sm'/>
                                        <div className='ml-2'>
                                            <Link href='/Operation/Teamwork'><p
                                                className='cursor-pointer space-x-10 text-base font-bold text-neutral-800'>特色</p>
                                            </Link>
                                            <div className='flex items-center space-x-10'>
                                                <Link href='/Operation/Teamwork'><p
                                                    className='cursor-pointer space-x-10 text-sm text-neutral-800 hover:text-orange-400'>团队协作</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src='https://file.sharein.cc/public/images/OperationManual/top.jpg'
                                               alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                               loading="lazy" className='rounded-sm'/>
                                        <div className='ml-2'>
                                            <Link href='/Operation/Video'><p
                                                className='cursor-pointer space-x-10 text-base font-bold text-neutral-800'>燧研视频</p>
                                            </Link>
                                            <div className='flex items-center space-x-10'>
                                                <Link href='/Operation/Video'><p
                                                    className='cursor-pointer space-x-10 text-sm text-neutral-800 hover:text-orange-400'
                                                >使用视频教程中心</p></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ]}><p
                                className='relative cursor-pointer text-black hover:bg-gray-100 rounded-2xl text-base font-medium p-2 w-[80px] flex items-center justify-center'>流程操作</p>
                            </Popover>
                            <div>
                                <Popover content={[
                                    <div className='justify-normal space-x-2 grid grid-cols-2 grid-rows-2 gap-4'
                                         key='1'>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/nengli_1.png'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='ml-2'>
                                                <Link href='/Ability'><p
                                                    className='cursor-pointer space-x-10 text-base font-bold  text-neutral-800'>3D打印服务</p>
                                                </Link>
                                                <div className='flex items-center space-x-10'>
                                                    <Link href='/Ability/FDM_3DPrinting'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>FDM成型</p>
                                                    </Link>
                                                    <Link href='/Ability/SLA_3DPrinting'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>SLA成型</p>
                                                    </Link>
                                                    <Link href='/Ability/SLS_3DPrinting'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>SLS成型</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/nengli_2.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='ml-2'>
                                                <Link href='/Ability/CNCMachiningServices'><p
                                                    className='cursor-pointer space-x-10 text-base font-bold  text-neutral-800'>CNC加工服务</p>
                                                </Link>
                                                <div className='flex items-center space-x-10'>
                                                    <Link href='/Ability/CNC_Milling'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>铣削</p>
                                                    </Link>
                                                    <Link href='/Ability/CNC_Turning'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>车削</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/nengli_3.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='ml-2'>
                                                <p className='cursor-pointer space-x-10 text-base font-bold  text-neutral-800'>附加服务</p>
                                                <div className='flex items-center space-x-10'>
                                                    <Link href='/Ability/SheetMetalProcessingServices'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>钣金加工服务</p>
                                                    </Link>
                                                    <Link href='/Ability/InjectionMoldingServices'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>注塑成型服务</p>
                                                    </Link>
                                                    <Link href='/Ability/MassProductionOrderService'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>生产订单服务</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/nengli_4.png'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Ability/FinishingServices'><p
                                                    className='cursor-pointer space-x-10 text-base font-bold text-neutral-800'>后处理服务</p>
                                                </Link>
                                                <div className='flex space-x-10'>
                                                    <div className='flex flex-col space-y-1'>
                                                        <Link href='/Ability/FinishingServices/AsMachined'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>原始机</p>
                                                        </Link>
                                                        <Link href='/Ability/FinishingServices/BeadBlasting'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>表面喷沙</p>
                                                        </Link>
                                                        <Link href='/Ability/FinishingServices/PowderCoating'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>粉末喷涂处理</p>
                                                        </Link>
                                                    </div>
                                                    <div className='flex flex-col space-y-1'>
                                                        <Link href='/Ability/FinishingServices/SmoothMachining'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>表面平滑处理</p>
                                                        </Link>
                                                        <Link href='/Ability/FinishingServices/Polishing'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>抛光表面</p>
                                                        </Link>
                                                        <Link href='/Ability/FinishingServices/Electroplating'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>电镀处理</p>
                                                        </Link>
                                                    </div>
                                                    <div className='flex flex-col space-y-1'>
                                                        <Link href='/Ability/FinishingServices/AnodizingTypeII'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>阳极氧化</p>
                                                        </Link>
                                                        <Link href='/Ability/FinishingServices/BlackOxide'><p
                                                            className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>氧化发黑处理</p>
                                                        </Link>
                                                        <Link
                                                            href='/Ability/FinishingServices/StainlessSteelPassivation'>
                                                            <p className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>不锈钢钝化处理</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>]}>
                                    <p className='relative cursor-pointer rounded-2xl text-black hover:bg-gray-100 dark:text-white text-base font-medium p-2 w-[80px] flex items-center justify-center'>能力</p>
                                </Popover></div>
                            <div className="">
                                <Popover content={[
                                    <div className='justify-normal space-x-2 grid grid-cols-2 grid-rows-3 gap-4'
                                         key='1'>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/hangye_1.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Profession/AerospacepartsManufacturing'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>航空航天零部件制造</p>
                                                </Link>
                                                <div>
                                                    <Link href='/Profession/AerospacepartsManufacturing'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>科技赋能
                                                        飞跃航空开发新高度</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/hangye_2.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Profession/CarParts'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>汽车零部件</p>
                                                </Link>
                                                <div>
                                                    <Link href='/Profession/CarParts'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>驱动创新
                                                        推动产品的开发速度</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/hangye_3.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Profession/IndustrialMachinery'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>工业机械</p>
                                                </Link>
                                                <div>
                                                    <Link href='/Profession/IndustrialMachinery'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>科技赋能
                                                        为您的机器提供卓越性能</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/hangye_4.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Profession/ConsumerElectronics'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>消费类电子产品</p>
                                                </Link>
                                                <div>
                                                    <Link href='/Profession/ConsumerElectronics'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>原型到生产
                                                        匠心直达世界各地的家庭</p></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/hangye_5.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Profession/RoboticsAndAutomation'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>机器人与自动化</p>
                                                </Link>
                                                <div>
                                                    <Link href='/Profession/RoboticsAndAutomation'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>轻松构建最复杂的自动化系统</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/hangye_6.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='ml-2'>
                                                <Link href='/Profession/Medical'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>医疗</p>
                                                </Link>
                                                <div className='justify-items'>
                                                    <Link href='/Profession/Medical'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>将下一个医疗保健创新推向市场</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ]}>
                                    <p className='relative cursor-pointer rounded-2xl text-black hover:bg-gray-100 dark:text-white text-base font-medium p-2 w-[80px] flex items-center justify-center'>行业</p>
                                </Popover>
                            </div>
                            <div className="">
                                <Popover content={[
                                    <div className='justify-normal space-x-2 grid grid-cols-2 grid-rows-2 gap-4'
                                         key='1'>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/cailiao_3.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Material/3Dprinting'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>3D打印</p>
                                                </Link>
                                                <div className='flex space-x-10 space-y-1'>
                                                    <Link href='/Material/3Dprinting/Photosensitiveresin'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>光敏树脂</p>
                                                    </Link>
                                                    <Link href='/Material/3Dprinting/Metal'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>金属</p>
                                                    </Link>
                                                    <Link href='/Material/3Dprinting/Engineeringplastics'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>工程塑料</p>
                                                    </Link>
                                                </div>
                                                <div className='flex space-x-10 space-y-1'>
                                                    <Link href='/Material/3Dprinting/Nylon'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>尼龙</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/cailiao_1.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Material/CNCMachiningServices'><p
                                                    className='cursor-pointer text-base font-bold  text-neutral-800'>CNC机加工</p>
                                                </Link>
                                                <div className='flex space-x-10 space-y-1'>
                                                    <Link href='/Material/CNCMachiningServices/Metal'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>金属</p>
                                                    </Link>
                                                    <Link href='/Material/CNCMachiningServices/Plastics'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>塑料</p>
                                                    </Link>
                                                    <Link href='/Material/CNCMachiningServices/CompositeMaterials'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>复合材料</p>
                                                    </Link>
                                                </div>
                                                <div className='flex space-x-10 space-y-1'>
                                                    <Link href='/Material/CNCMachiningServices/SpecialMaterials'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>特殊材料</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/cailiao_5.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/Material/SheetMetalProcessing'><p
                                                    className='cursor-pointer text-base font-bold text-neutral-800'>钣金加工</p>
                                                </Link>
                                                <div className='flex space-x-10'>
                                                    <Link href='/Material/SheetMetalProcessing/Metal'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>金属</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/cailiao_4.jpeg'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <p className='cursor-pointer text-base font-bold  text-neutral-800'>所有注塑材料</p>
                                                <div className='flex space-x-10'>
                                                    <Link href='/Material/AllLnjectionMoldingMaterials'><p
                                                        className='cursor-pointer text-sm text-neutral-800 hover:text-orange-400'>塑料</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>]}>
                                    <p className='relative cursor-pointer rounded-2xl text-black hover:bg-gray-100 dark:text-white text-base font-medium p-2 w-[80px] flex items-center justify-center'>材料</p>
                                </Popover>
                            </div>
                            <div className="">
                                <Popover content={[
                                    <div className='justify-normal space-x-2 grid grid-cols-2 grid-rows-2 gap-4'
                                         key='1'>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/guanyuwomen_1.png'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm object-fill h-[63px]'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/About_us'><p
                                                    className='cursor-pointer text-base font-bold text-neutral-800'>关于我们</p>
                                                </Link>
                                                <div className='flex space-x-10'>
                                                    <Link href='/About_us'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>燧研的故事与发展</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/guanyuwomen_2.png'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/About_us/bepartner'><p
                                                    className='cursor-pointer text-base font-bold text-neutral-800'>成为合作伙伴</p>
                                                </Link>
                                                <div className='flex space-x-10'>
                                                    <Link href='/About_us/bepartner'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>加入燧研，发展您的业务</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/guanyuwomen_3.png'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/About_us/contanct_us'><p
                                                    className='cursor-pointer text-base font-bold text-neutral-800'>联系我们</p>
                                                </Link>
                                                <div className='flex space-x-10'>
                                                    <Link href='/About_us/contanct_us'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>我们的办事地点和联系方式</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <Image
                                                src='https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/head/guanyuwomen_4.png'
                                                alt='123' width='100' height='100' decoding="async" data-nimg="1"
                                                loading="lazy" className='rounded-sm'/>
                                            <div className='justify-items ml-2'>
                                                <Link href='/About_us/hire'><p
                                                    className='cursor-pointer text-base font-bold text-neutral-800'>招聘/加入</p>
                                                </Link>
                                                <div className='flex space-x-10'>
                                                    <Link href='/About_us/hire'><p
                                                        className='text-sm text-neutral-800 cursor-pointer hover:text-orange-400'>加入我们的团队</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ]}>
                                    <p className='relative cursor-pointer rounded-2xl text-black hover:bg-gray-100 dark:text-white text-base font-medium p-2 w-[80px] flex items-center justify-center'>关于我们</p>
                                </Popover>
                            </div>
                        </div>
                    </div>
                    {/*销售*/}
                    <div className='items-center flex'>
                        <Link href='/SalesAgent'>
                            <span
                                className='cursor-pointer flex text-base whitespace-nowrap text-neutral-800 font-medium'>销售合作申请</span>
                        </Link></div>
                </div>
                {/*报价登录*/}
                <div className='flex justify-end w-[20%] lg:flex lg:justify-end xl:flex xl:justify-center xl:mr-auto'>
                    <div className='w-[50%] flex items-center justify-end'>
                        {visible &&
                            <a href='/Workspace' target="_blank"
                               className='cursor-pointer flex items-center justify-start absolute'>
                                <button className='cursor-pointer'>
                                    <div
                                        className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                    <div
                                        className='px-1 text-[14px] m-0.5 md:px-2 md:my-0.5 md:text-[16px] xl:px-5 xl:py-2 bg-black rounded-[6px] relative text-white hover:bg-transparent'>
                                        获取报价
                                    </div>
                                </button>
                            </a>
                        }
                    </div>
                    <div className='flex cursor-pointer items-center justify-start w-[50%]'>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};
