import React from "react";
import Link from "next/link";


export default function Bottom() {

    return (
        <>
            <div
                className='h-56 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-t-lg'>
                <div
                    className='absolute inset-0 w-full h-full bg-slate-900 z-20 pointer-events-none'></div>
                <h1 className='md:text-4xl text-xl text-white relative z-20 mb-12'>立即将您的零部件投入生产</h1>
                <a href='/Workspace' target="_blank">
                    <button className='relative text-xl h-12 w-40 p-[1px] overflow-hidden rounded-3xl cursor-pointer'>
                        <div
                            className='relative border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased bg-white z-20 text-gray-800 dark:text-white border-neutral-200 dark:border-slate-800 hover:text-black'>
                            立即生成
                        </div>
                    </button>
                </a>
            </div>
            <div className='overflow-hidden h-auto relative'>
                <div className='flex items-center justify-center w-full flex-col bg-neutral-900'>
                    <div className='relative z-50 flex flex-row py-10 w-9/10 xl:w-4/5'>
                        <div className='flex flex-row w-2/3'>
                            <div className='space-y-3 mr-5 md:mr-30 lg:mr-40 whitespace-nowrap'>
                                <h4 className='text-white font-bold text-lg mb-5 inline-block'>关于我们</h4>
                                <div>
                                    <Link href='/About_us'><p
                                        className='text-white/90 text-sm hover:underline'>关于我们</p>
                                    </Link></div>
                                <div><Link href='/About_us/bepartner'><p
                                    className='text-white/90 text-sm hover:underline'>成为合作伙伴</p></Link></div>
                                <div><Link href='/About_us/contanct_us'><p
                                    className='text-white/90 text-sm hover:underline'>联系我们</p></Link></div>
                                <div><Link href='/About_us/hire'><p
                                    className='text-white/90 text-sm hover:underline'>招聘/加入</p></Link></div>

                            </div>
                            <div className='space-y-3 mr-5 md:mr-30 lg:mr-40 whitespace-nowrap'>
                                <h4 className='text-white font-bold text-lg mb-5'>能力/可以做什么</h4>
                                <div><Link href='/Ability'><p
                                    className='text-white/90 text-sm hover:underline inline-block'>3D打印服务</p></Link>
                                </div>
                                <div><Link href='/Ability/CNCMachiningServices'><p
                                    className='text-white/90 text-sm hover:underline'>CNC加工服务</p></Link></div>
                                <div><Link href='/Ability/FinishingServices'><p
                                    className='text-white/90 text-sm hover:underline'>后处理服务</p></Link></div>
                                <div><Link href='/AfterSalesSgreement'><p
                                    className='text-white/90 text-sm hover:underline'>售后服务</p></Link></div>
                            </div>
                        </div>
                        <div className='w-1/3 flex flex-col '>
                            <div className='space-y-3'>
                            <p className='text-white/90 text-sm'>联系人：束经理</p>
                            <p className='text-white/90 text-sm'>联系电话：0574-87919101</p>
                            <p className='text-white/90 text-sm'>邮箱：marketingmanager@sharein.cc</p></div>
                        </div>
                    </div>
                    <div className='border-t text-center space-y-2 py-3 border-t-white/20 w-9/10 md:w-4/5'>
                        <p className='text-white/80 text-xs flex items-center justify-center'>
                            <a className='flex items-center mr-4'
                               href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33020002001182"
                               target='_blank' rel="noreferrer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt='' loading='lazy' decoding='async' height='14' width='14' data-nimg='1'
                                     className="mr-1 transparent"
                                     src="https://www.sharein.cc/_next/static/media/f_ico.ef881569.png">
                                </img>浙公网安备33020002001182号
                            </a>
                            <a className='flex items-center mr-4'
                               href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33020002001238"
                               target='_blank' rel="noreferrer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt='' loading='lazy' decoding='async' height='14' width='14' data-nimg='1'
                                     className="mr-1 transparent"
                                     src="https://www.sharein.cc/_next/static/media/f_ico.ef881569.png">
                                </img>浙公网安备33020002001238号
                            </a>
                            <a className='flex items-center mr-4'
                               href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33020002001242"
                               target='_blank' rel="noreferrer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt='' loading='lazy' decoding='async' height='14' width='14' data-nimg='1'
                                     className="mr-1 transparent"
                                     src="https://www.sharein.cc/_next/static/media/f_ico.ef881569.png">
                                </img>浙公网安备33020002001242号
                            </a>
                            <a className='flex items-center mr-4'
                               href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33020002001241"
                               target='_blank' rel="noreferrer">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt='' loading='lazy' decoding='async' height='14' width='14' data-nimg='1'
                                     className="mr-1 transparent"
                                     src="https://www.sharein.cc/_next/static/media/f_ico.ef881569.png">
                                </img>浙公网安备33020002001241号
                            </a>
                        </p>
                        <p className='text-white/80 text-xs flex items-center justify-center'>
                            <a href="https://beian.miit.gov.cn/#/Integrated/index" target='_blank' className='mr-4'
                               rel="noreferrer">浙ICP备2025154427号-1</a>
                            <a href="https://beian.miit.gov.cn/#/Integrated/index" target='_blank' className='mr-4'
                               rel="noreferrer">浙ICP备2025154427号-3</a>
                            <a href="https://beian.miit.gov.cn/#/Integrated/index" target='_blank' className='mr-4'
                               rel="noreferrer">浙ICP备2025154427号-4</a>
                            <a href="https://beian.miit.gov.cn/#/Integrated/index" target='_blank' className='mr-4'
                               rel="noreferrer">浙ICP备2025154427号-5</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}