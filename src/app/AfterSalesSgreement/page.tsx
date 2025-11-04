import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function AfterSalesSgreement() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            规格无保证声明
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            验收规则：交付物一经签收即视为验收合格。您知悉：本公司仅承诺商业合理努力按规格生产，不保证设计可行性或结果符合预期；因规格问题导致无法生产的，本公司不承担责任。免责声明：交付物不提供适销性或特定用途适用性默示担保；您需对规格准确性负全责。
                        </p>
                    </div>
                    <div>
                        <h4 className='text-center py-16 text-5xl font-bold'>
                            有限质保与补救措施
                        </h4>
                        <p className='text-lg text-black/80 leading-9'>
                            质保期：交付后7个工作日内，若发现与规格存在重大不符，可申请替换。补救条件：需在质保期内书面通知并提供证据；非合格部件需在通知后7个工作日内退回。逾期后果：超期未通知视为交易完成，不可退货
                        </p>
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