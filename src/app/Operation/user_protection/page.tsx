import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import ScrollButton from "@/app/ScrollButton";
import React from "react";

export default function UserProtection() {
    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <h4 className='text-center py-16 text-5xl font-bold'>严格的保密</h4>
                    <p className='text-lg text-black/80 leading-9'>
                        我们确保整个订单的机密性。您可以在我们的销售条款中找到我们的保密条款。如果您需要额外的保证，我们很乐意向您发送我们的保密协议，该协议可以通过安全链接进行数字签名。请联系您的客户经理或
                        marketingmanager@sharein.cc
                        索取我们的保密协议。为了生产您的订单，我们与全球制造合作伙伴网络合作。我们所有的合作伙伴都必须经过严格的入职流程，其中包括签署合同义务以保护您的数据。机密是指从头到尾都是机密的。
                    </p>
                </div>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <h4 className='text-center py-16 text-5xl font-bold'>高效安全的服务器</h4>
                    <p className='text-lg text-black/80 leading-9'>
                        我们使用安全连接进行所有客户和制造合作伙伴的交互，即传输任何文件时。使用的服务器是全球领先的云计算服务提供商之一，致力于为企业、开发者和政府提供全面的云解决方案。所有数字模型和图纸都存储在服务器上。
                    </p>
                </div>
                <div className='w-auto max-w-[1280px] py-16 space-y-16 m-auto'>
                    <h4 className='text-center py-16 text-5xl font-bold'>联系我们</h4>
                    <div className='text-lg text-black/80 leading-9'>
                        <p>联系人：胡经理</p>
                        <p>联系电话：0574-87919101</p>
                        <p>邮箱：marketingmanager@sharein.cc</p>
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