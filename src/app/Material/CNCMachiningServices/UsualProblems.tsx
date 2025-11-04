'use client'
import React, {useState} from "react";

export default function UsualProblems() {

    const [visibleA, setVisibledA] = useState(false);
    const [visibleB, setVisibledB] = useState(false);

    function A(){
        setVisibledA(!visibleA);
    }

    function AF(){
        setVisibledA(false);
    }

    function B(){
        setVisibledB(!visibleB);
    }

    function BF(){
        setVisibledB(false);
    }

    return (
        <div>
            <p className='md:text-5xl text-center font-bold mb-8 '>
                常见问题
            </p>
            <div className='border border-gray-300 rounded p-10 relative'>
                <div className='pointer-events-none absolute'></div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 items-center justify-between py-4 font-medium hover:underline'  onClick={() => {
                        A();
                        BF()
                    }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            什么是塑料加工？
                        </button>
                        <div style={{
                            transform: visibleA ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                <path d='m6 9 6 6 6-6'></path>
                            </svg>
                        </div>
                    </h3>
                    <div>
                        <div className='overflow-hidden' style={{
                            height: !visibleA ? '0px' : '40px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify '>
                                <p>塑料加工是一种制造过程，其中使用计算机数控 (CNC)
                                    铣削工具非常精确地从原始塑料块上一点一点地切割出不需要的几何形状，从而可以高精度地生产复杂的零件。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 cursor-pointer items-center justify-between py-4 font-medium hover:underline'  onClick={() => {
                        B();
                        AF()
                    }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            CNC加工适合哪些材料?
                        </button>
                        <div style={{
                            transform: visibleB ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className='lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground'>
                                <path d='m6 9 6 6 6-6'></path>
                            </svg>
                        </div>
                    </h3>
                    <div>
                        <div className='overflow-hidden' style={{
                            height: !visibleB ? '0px' : '80px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify'>
                                <p>CNC加工服务采用先进的计算机数字控制技术，为各类工程材料提供高精度、复杂形状的加工解决方案。我们支持多种常用及特殊工程材料，涵盖金属与非金属领域：
                                    金属材料： 铝合金（如6061-T6）：重量轻，强度高，适合精密零件加工 不锈钢：耐腐蚀性优异，适合医疗、食品等领域
                                    钛合金：高强度、低密度，适用于航空航天等高端领域 非金属材料： PC/ABS塑料：兼具刚性和韧性，广泛应用于电子外壳
                                    尼龙（PA）：耐磨性佳，适合机械部件加工 石墨：优良导电性能，适合高精度模具制作。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}