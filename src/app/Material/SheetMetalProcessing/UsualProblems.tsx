'use client'
import {motion} from "motion/react";
import React, {useState} from "react";

export default function UsualProblems() {

    const [visibleA, setVisibledA] = useState(false);
    const [visibleB, setVisibledB] = useState(false);

    function A() {
        setVisibledA(!visibleA);
    }

    function AF() {
        setVisibledA(false);
    }

    function B() {
        setVisibledB(!visibleB);
    }

    function BF() {
        setVisibledB(false);
    }

    const variants = {
        visible: {height: 0, display: 'block'},
        hidden: {height: 80, display: 'none'},
    }

    return (
        <div>
            <p className='md:text-5xl text-center font-bold mb-8 '>
                常见问题
            </p>
            <div className='border border-gray-300 rounded p-10 relative'>
                <div className='pointer-events-none absolute'></div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 cursor-pointer items-center justify-between py-4 font-medium hover:underline'
                        onClick={() => {
                            A();
                            BF()
                        }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            什么是钣金加工服务？
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
                            height: !visibleA ? '0px' : '100px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify '>
                                <p>塑料加工是一种制造过程，其中使用计算机数控 (CNC)
                                    钣金加工是现代制造业中不可或缺的一环，通过精确的切割、折弯、冲压等工艺，我们将您的设计转化为现实。
                                    无论您需要的是复杂结构件、精密零部件还是定制化产品，我们都能够满足您的需求。我们的服务涵盖多种材质和规格，包括但不限于不锈钢、铝合金、镀锌板等多种材料，并支持激光切割、等离子切割、折弯成型等多样化加工方式。
                                    我们采用先进的设备和技术，严格控制每一道工序的质量，确保产品的精度和稳定性。同时，我们拥有一支经验丰富的技术团队，能够为客户提供专业的技术支持和优化建议，帮助您降低生产成本，提升产品性能。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 cursor-pointer items-center justify-between py-4 font-medium hover:underline'
                        onClick={() => {
                            B();
                            AF()
                        }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            钣金加工的工艺与应用领域?
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
                                <p>我们的钣金加工服务涵盖剪切、冲压、折弯、激光切割等多种工艺，结合先进的生产设备和丰富的行业经验，确保每一件产品都达到最高精度和质量标准。
                                    从简单的金属板件到复杂的结构件，燧研智算都能满足您的需求。我们采用数控设备进行高精度加工，严格控制材料变形和尺寸偏差，确保产品符合您的设计要求和使用场景。
                                    无论是电子设备、通信设备还是汽车、航空航天领域，我们的钣金加工服务都能为您的项目保驾护航。选择燧研智算，享受专业、高效的钣金加工解决方案！
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}