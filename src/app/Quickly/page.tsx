'use client'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Popover} from "antd";
import Login from "@/app/Login";

function Quickly() {

    const [disable, setDisable] = useState(false);

    function handleDisable() {
        setDisable(true);
    }

    return (
        <div className='w-full h-screen flex pt-[162px] md:pt-[66px]'>
            <div
                className='bg-white fixed top-0 z-1 h-[160px] sm:h-[160px] md:h-[120px] xl:h-[60px] lg:h-[60px] w-full shadow-lg flex justify-center items-center'>
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

                        </div>
                        <div className='flex cursor-pointer items-center justify-start w-[50%]'>
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
            {/*左侧菜单*/}
            <div className='w-auto xl:w-[15%] p-5 border-r border-r-gray-200 h-full pb-[10rem]'>
                <div className='space-y-3'>
                    <button
                        className='h-[45px] w-full px-5 border-1 border-orange-400 rounded-xs bg-orange-100/5 text-orange-400 cursor-pointer text-center flex justify-center items-center'>
                        <a href='/Quickly'>
                            <span className='flex items-center justify-center'><svg viewBox="64 64 896 896"
                                                                                    focusable="false"
                                                                                    data-icon="comment" width="1em"
                                                                                    height="1em"
                                                                                    fill="currentColor"
                                                                                    aria-hidden="true"><defs><style></style></defs><path
                                d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zm-280 0c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path><path
                                d="M894 345a343.92 343.92 0 00-189-130v.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l.8 132.6c0 3.2.5 6.4 1.5 9.4a31.95 31.95 0 0040.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-.5.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102zm505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-.2-.1A367.31 367.31 0 00729 676c76.4-105.3 88.8-237.6 44.4-350.4l.6.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z"></path><path
                                d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path></svg>
                        <span className='hidden ml-2 xl:block'>燧言Quickly</span></span>
                        </a></button>
                    <button
                        className='h-[45px] w-full px-5 border-1  rounded-xs border-gray-200 hover:text-orange-400 hover:border-orange-400 cursor-pointer text-center flex justify-center items-center'>
                        <a href='/Workspace'><span className='flex justify-center items-center'><svg
                            viewBox="64 64 896 896" focusable="false" data-icon="transaction" width="1em"
                            height="1em" fill="currentColor" aria-hidden="true"><path
                            d="M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 00-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 01103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9 43.6-18.4 89.9-27.8 137.6-27.8 47.8 0 94.1 9.3 137.6 27.8 42.1 17.8 79.9 43.4 112.4 75.9 10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 003 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82 277 82 86.3 270.1 82 503.8a8 8 0 008 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 01-103.5 242.4 352.57 352.57 0 01-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 01-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 00-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942 747 942 937.7 753.9 942 520.2a8 8 0 00-8-8.2z"></path></svg>
                            <span className='hidden ml-2 xl:block'>新报价</span></span></a>
                    </button>
                    <button
                        className='h-[45px] w-full px-5 border-1  rounded-xs border-gray-200 hover:text-orange-400 hover:border-orange-400 cursor-pointer text-center flex justify-center items-center'>
                        <a href='/Workspace/myQuote'><span className='flex justify-center items-center'><svg
                            viewBox="64 64 896 896" focusable="false" data-icon="history" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true"><path
                            d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"></path></svg>
                            <span className='hidden ml-2 xl:block'>历史报价</span></span></a>
                    </button>
                    <button
                        className='h-[45px] w-full px-5 border-1  rounded-xs border-gray-200 hover:text-orange-400 hover:border-orange-400 cursor-pointer text-center flex justify-center items-center'>
                        <a href='/Workspace/order'><span className='flex justify-center items-center'><svg
                            viewBox="64 64 896 896" focusable="false" data-icon="file-text" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true"><path
                            d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path></svg>
                            <span className='hidden ml-2 xl:block'>我的订单</span></span></a>
                    </button>
                </div>
            </div>
            {/*中间内容*/}
            <div className='p-5 w-[40%] sm:w-[50%] md:w-[60%] h-full !flex !flex-col '>
                <div className='overflow-hidden hidden opacity-1 sm:opacity-100 sm:block duration-300'>
                    <div className='h-auto bg-gradient-to-r from-blue-50 to-purple-50 bg-opacity-50 overflow-hidden'
                         style={{
                             height: disable ? '0px' : 'auto',
                             transition: 'height 0.2s',
                         }}>
                        <div className='w-auto flex  m-3 '>
                            <div className='flex items-start h-[70px]'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="Avatar" loading="lazy" width="60" height="60" decoding="async" data-nimg="1"
                                     src='https://www.quicklyre.com/_next/static/media/icon.f41f5269.png'
                                     className='w-auto h-full lg:w-[60px] lg:h-[60px]'/>
                            </div>
                            <div className='w-full ml-5'>
                                <div className='flex w-full'>
                                    <h4 className='text-[20px] font-bold '>您好，我是您的工业人工智能助手：燧言Quickly！</h4>
                                    <div className='ml-auto h-[20px] items-center justify-end'>
                                        <button onClick={() => {
                                            handleDisable()
                                        }}><span role="img" aria-label="close" className="cursor-pointer"><svg
                                            fillRule="evenodd" viewBox="64 64 896 896" focusable="false"
                                            data-icon="close" width="1em" height="1em" fill="currentColor"
                                            aria-hidden="true"><path
                                            d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg></span>
                                        </button>
                                    </div>
                                </div>
                                <div className='pt-2 pr-2 text-[14px] text-[#666666] flex-wrap overflow-hidden'>
                                    <span
                                        className=''>基于人工智能和大语言模型，我可以帮您计算零件价格、分析零件设计问题哦</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overflow-auto w-full opacity-0 h-[150px]  bg-white'></div>
                <div className='flex items-center justify-between py-2'>
                    <div
                        className='cursor-pointer border w-[110px] h-[50px] p-2 gap-2 rounded-sm flex items-center border-orange-500 bg-[#FFF6F3]'>
                        <div className='flex items-center justify-center'>
                            <span role="img" aria-label="pay-circle" className="text-[#FFD700]"><svg
                                viewBox="64 64 896 896" focusable="false" data-icon="pay-circle" width="1em"
                                height="1em" fill="currentColor" aria-hidden="true"><path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 00-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8-.1-4.4-3.7-8-8.1-8z"></path></svg></span>
                        </div>
                        <div>
                            <span className='text-[#ff5722]'>快速报价</span>
                        </div>
                    </div>
                </div>
                <div className='w-full border border-gray-300 rounded-sm h-auto focus:border-orange-500'>
                    <div className='w-auto m-3 flex'>
                        <div className=''>
                            <span className='text-[14px]'>快速报价</span>
                        </div>
                        <div className='ml-auto flex justify-end items-center'>
                            <button>
                                <span role="img" aria-label="close" className=""><svg fillRule="evenodd"
                                                                                      viewBox="64 64 896 896"
                                                                                      focusable="false"
                                                                                      data-icon="close" width="1em"
                                                                                      height="1em" fill="currentColor"
                                                                                      aria-hidden="true"><path
                                    d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg></span>
                            </button>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 rounded-sm'>
                        <div className='m-5 h-[200px] w-auto flex justify-center'>
                            <div className='my-10'>
                                <div className='flex justify-center items-center'>
                                    <span role="img" aria-label="cloud-upload" className=""><svg viewBox="64 64 896 896"
                                                                                                 focusable="false"
                                                                                                 data-icon="cloud-upload"
                                                                                                 width="2em"
                                                                                                 height="2em"
                                                                                                 fill="currentColor"
                                                                                                 aria-hidden="true"><path
                                        d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"></path><path
                                        d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path></svg></span>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h5 className='text-[14px] font-bold'>上传零件</h5>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[13px] text-[#00000073]'>请上传3D图纸/PDF文件/Excel-BOM清单</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-auto flex m-2'>
                        <div className='flex justify-center items-end w-[40px]  m-auto'>
                            <span role="img" aria-label="link" className="border border-gray-300 rounded-sm"><svg viewBox="64 64 896 896" focusable="false" data-icon="link" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path></svg></span>
                        </div>
                        <div className='w-full h-full m-2'><input placeholder='您可以在这里输入您的问题，按回车发送消息' className='w-full'></input></div>
                        <div className='cursor-pointer opacity-50 rounded-full w-[45px] h-[40px] bg-[#FF5722] flex items-center justify-center'>
                            <span role="img" aria-label="arrow-up" className="text-white"><svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path></svg></span>
                        </div>
                    </div>
                </div>
            </div>
            {/*右侧*/}
            <div className='w-auto mx-auto xl:w-[25%] 2xl:w-[25%] border-l border-l-gray-200 bg-white '>
                <div className='w-full border-b border-b-gray-200 border-t-gray-200 h-[65px]'>
                    <div className='w-[90%] h-full justify-center mx-auto items-center'>
                        <div className='flex items-center h-full w-auto'>
                            <div
                                className='hidden sm:block text-ellipsis overflow-hidden whitespace-nowrap font-bold'>我的零件库（0）
                            </div>
                            <div className='flex items-center mx-auto'>
                                <div
                                    className='flex flex-wrap grid-cols-3 gap-2 md:gap-3 items-center whitespace-nowrap'>
                                    {/*筛选*/}
                                    <div
                                        className='text-white cursor-pointer rounded-xs bg-orange-600 hover:bg-orange-500 w-[45px] h-[30px] justify-center flex items-center'>
                                        <div className='tooltip flex justify-center items-center '
                                             data-tip="筛选">
                                            <button className='cursor-pointer'>
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="filter"
                                                     width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/*全选*/}
                                    <div
                                        className='text-gray border border-gray-200 hover:border-orange-500 hover:text-orange-500 cursor-pointer w-[45px] h-[30px] justify-center flex items-center'>
                                        <div className='tooltip flex justify-center items-center'
                                             data-tip="全选">
                                            <button className='cursor-pointer'>
                                                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="bars"
                                                     width="1em"
                                                     height="1em" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/*清空*/}
                                    <div
                                        className='text-zinc-400 bg-gray-100 cursor-not-allowed border border-gray-200 w-[30px] h-[30px] justify-center flex items-center'>
                                        <div className='tooltip flex justify-center items-center'
                                             data-tip="清空">
                                            <button className='cursor-not-allowed'>
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="delete"
                                                     width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/*刷新*/}
                                    <div
                                        className='text-gray border border-gray-200 hover:border-orange-500 hover:text-orange-500 cursor-pointer w-[30px] h-[30px] justify-center flex items-center'>
                                        <div className='tooltip flex justify-center items-center'
                                             data-tip="刷新">
                                            <button className='cursor-pointer'>
                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="redo"
                                                     width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-[6px] py-[15px]'>
                    <div className='h-[calc(100vh-180px)]'>
                        <div className='flex justify-center text-gray-500 py-8 relative w-full'>
                            暂无零件数据
                        </div>
                        <div
                            className='fixed bottom-5 w-[35%] xl:w-[24%] py-3 flex items-center justify-center bg-white/60'>
                            <div
                                className='fixed bottom-5 w-[35%] xl:w-[24%] py-3 flex items-center justify-center bg-white/60'>
                                <button
                                    className='w-[80%] rounded border border-orange-500 h-[45px] bg-[#FFF6F3] group cursor-pointer'>
                                    <span
                                        className='text-base text-orange-500 cursor-pointer group-hover:text-orange-400'>快速下单</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quickly;