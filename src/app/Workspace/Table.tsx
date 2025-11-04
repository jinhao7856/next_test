export default function Table() {
    return (
        <div className='w-[400px]'>
            <table className='table-fixed w-[100px] min-w-1'>
                <colgroup>
                    <col/>
                    <col className='w-[20px]'/>
                    <col className='w-[220px]'/>
                    <col className='w-[200px]'/>
                    <col className='w-[240px]'/>
                    <col className='w-[100px]'/>
                    <col className='w-[120px]'/>
                    <col className='w-[120px]'/>
                    <col className='w-[100px]'/>
                </colgroup>
                <thead className='overflow-scroll whitespace-nowrap'>
                <tr className=''>
                    <th className='w-10'></th>
                    <th className='w-50 left-0'>图纸信息</th>
                    <th className='w-50 left-0'>模型信息</th>
                    <th className='w-50 left-0'>参数信息</th>
                    <th className='w-25 left-0'>数量</th>
                    <th className='w-25 left-0'>单价</th>
                    <th className='w-25 left-0'>总价</th>
                    <th className='w-25 left-0'>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='col-span-9'>
                        <div className='w-[968px] h-[150px] left-auto overflow-hidden sticky'>
                            <div className='flex justify-center items-center h-1/2 mt-10'>
                                <svg d="1761565189431" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="4804" width="64" height="41">
                                    <path
                                        d="M928 896H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333333V533.8a21.293333 21.293333 0 0 1 0.46-4.886667 20.886667 20.886667 0 0 1 1.566667-4.666666l162.033333-364.573334a53.38 53.38 0 0 1 48.733334-31.673333h470.413333a53.38 53.38 0 0 1 48.733333 31.673333l162 364.573334a20.886667 20.886667 0 0 1 1.566667 4.666666 21.293333 21.293333 0 0 1 0.46 4.886667V842.666667a53.393333 53.393333 0 0 1-53.3 53.333333zM128 554.666667v288a10.666667 10.666667 0 0 0 10.666667 10.666666h789.333333a10.666667 10.666667 0 0 0 10.666667-10.666666V554.666667h-205.186667a10.566667 10.566667 0 0 0-10.52 8.906666 192 192 0 0 1-379.253333 0A10.566667 10.566667 0 0 0 333.186667 554.666667z m11.493333-42.666667h193.693334a53.293333 53.293333 0 0 1 52.666666 44.9C397.386667 629.773333 459.413333 682.666667 533.333333 682.666667s135.946667-52.893333 147.486667-125.766667a53.293333 53.293333 0 0 1 52.666667-44.9h193.693333l-148.893333-335a10.666667 10.666667 0 0 0-9.746667-6.333333H298.126667a10.666667 10.666667 0 0 0-9.746667 6.333333z"
                                        fill="#d9d9d9" p-id="4805"></path>
                                </svg>
                            </div>
                            <div className='w-full text-center text-gray-400'>请上传STEP/STP文件</div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className='text-xl font-bold my-5'>上传图纸</div>
            <div className='border-2 border-gray-100 h-[130px] w-[968px] rounded-md hover:bg-orange-100'>
                <button >
                    <div className='w-full h-[110px] p-8 flex group'>
                        <div className='h-full w-1/12'>
                            <div
                                className='border border-gray-100 w-[40px] h-[40px] bg-white cursor-pointer hover:border-orange-400 '>
                                <div className='p-[10px] hover:text-orange-400'>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder-open"
                                         className="w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                              d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='w-4/5 space-y-2 text-left'>
                            <p className='text-lg font-bold mb-1 '>拖拽或上传图纸文件</p>
                            <p className='text-base text-gray-500 mb-2'>可支持STEP、STP、SLDPRT、X_T、X_B、SAT、IPT、CATPART、PRT、CATPRODUCT、ASM、SLDASM格式的文件
                                上传您电脑上的文件，或者直接将文件拖到这里。</p>
                        </div>
                        <div className='flex justify-end '>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder-open"
                                 className="w-[80px] h-[80px] opacity-10 group-hover:-translate-x-5 group-hover:opacity-40 duration-500" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path fill="currentColor"
                                      d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"></path>
                            </svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                                 className="h-[20px] w-[20px] fa-chevron-right opacity-0 group-hover:-translate-x-5 group-hover:opacity-20 duration-500" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 320 512">
                                <path fill="currentColor"
                                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}