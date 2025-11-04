'use client'
import React, {useState} from "react";
import '@/app/Material/problem.css';


export default function UsualProblems() {

    const [visibleA, setVisibledA] = useState(false);
    const [visibleB, setVisibledB] = useState(false);
    const [visibleC, setVisibledC] = useState(false);
    const [visibleD, setVisibledD] = useState(false);
    const [visibleE, setVisibledE] = useState(false);

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

    function C() {
        setVisibledC(!visibleC);
    }

    function CF() {
        setVisibledC(false);
    }

    function D() {
        setVisibledD(!visibleD);
    }

    function DF() {
        setVisibledD(false);
    }

    function E() {
        setVisibledE(!visibleE);
    }

    function EF() {
        setVisibledE(false);
    }

    return (
        <div>
            <p className='md:text-5xl text-center font-bold mb-8'>
                常见问题
            </p>
            <div className='border border-gray-300 rounded p-10 relative group'>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 cursor-pointer items-center justify-between py-4 font-medium hover:underline'  onClick={() => {
                        A();
                        BF();
                        CF();
                        DF();
                        EF()
                    }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            3D 打印使用什么塑料？
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
                            height: !visibleA ? '0px' : '30px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify duration-300'>
                                <p>我们提供以下塑料的 3D 打印功能：PLA、Formlabs 树脂、3D Systems
                                    树脂、ABS、尼龙、PETG、TPU、ASA
                                    和 PEI。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 cursor-pointer items-center justify-between py-4 font-medium hover:underline'  onClick={() => {
                        AF();
                        B();
                        CF();
                        DF();
                        EF()
                    }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            3D打印塑料的成本是多少？
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
                            height: !visibleB ? '0px' : '60px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify'>
                                <p>3D 打印成本取决于零件尺寸和复杂程度以及您选择的塑料。需要考虑的变量包括 3D
                                    打印工艺的类型、生产和后处理时间以及所需塑料丝、树脂或粉末的数量和质量。得益于我们的快速报价生成器和分散的
                                    3D 打印店制造网络，我们可以为您的定制零件需求提供有竞争力的价格。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 cursor-pointer items-center justify-between py-4 font-medium hover:underline' onClick={() => {
                        AF();
                        C();
                        BF();
                        DF();
                        EF()
                    }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            3D 打印塑料的强度如何？
                        </button>
                        <div style={{
                            transform: visibleC ? 'rotate(180deg)' : 'rotate(0deg)',
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
                            height: !visibleC ? '0px' : '30px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify'>
                                <p>由于聚合物类型多种多样，3D 打印塑料部件的强度也各不相同。这也取决于构建方向和技术。我们建议使用Markforged
                                    Onyx、PA12、PETG和PP以获得最佳部件强度。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 cursor-pointer items-center justify-between py-4 font-medium hover:underline' onClick={() => {
                        AF();
                        D();
                        BF();
                        CF();
                        EF()
                    }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            是否可以 3D 打印透明塑料部件？
                        </button>
                        <div style={{
                            transform: visibleD ? 'rotate(180deg)' : 'rotate(0deg)',
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
                            height: !visibleD ? '0px' : '80px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify'>
                                <p>是的，您可以使用透明 PLA、PETG 或专用树脂等材料 3D
                                    打印透明塑料部件。实现透明度通常需要微调打印设置，例如层高和填充密度，或后处理步骤，例如打磨和抛光。SLA
                                    打印机通常可产生最清晰的结果，尤其是与透明树脂结合使用时。Protolabs Network 提供带 SLA
                                    打印的透明树脂，但是，如果需要完全透明，请联系我们以提出定制请求。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-top border-b border-gray-300'>
                    <h3 className='flex flex-1 items-center justify-between cursor-pointer py-4 font-medium hover:underline' onClick={() => {
                        AF();
                        E();
                        BF();
                        DF();
                        CF()
                    }}>
                        <button className='cursor-pointer w-full flex justify-start'>
                            塑料 3D 打印有多精确？
                        </button>
                        <div style={{
                            transform: visibleE ? 'rotate(180deg)' : 'rotate(0deg)',
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
                            height: !visibleE ? '0px' : '60px',
                            transition: 'height 0.3s',
                        }}>
                            <div className='pb-4 pt-0 text-base text-justify'>
                                <p>塑料 3D 打印的精度取决于打印技术。FDM 通常可实现约 0.1 毫米的精度，但可能会出现层线。SLA
                                    可以提供更高的精度，约 0.05 毫米，以及更光滑的表面。SLS 的精度与 SLA
                                    相当，但打印出的部件纹理更粗糙。材料、层高和后处理等其他因素也会影响精度。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}