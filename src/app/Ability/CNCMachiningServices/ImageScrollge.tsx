'use client'
import React, {useCallback} from "react";
import Marquee from "react-fast-marquee";


const images = [
    { src: 'https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished1.png', alt: 'thumbnail' },
    { src: 'https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished2.png', alt: 'thumbnail' },
    { src: 'https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished3.png', alt: 'thumbnail' },
    { src: 'https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished1.png', alt: 'thumbnail' },
    { src: 'https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished2.png', alt: 'thumbnail' },
    { src: 'https://zhenkekeji.oss-cn-hangzhou.aliyuncs.com/public/details/CNCMachiningServices/finished3.png', alt: 'thumbnail' },
]

const ImageScrolle = () => {
    const renderImage = useCallback((image: { src: string; alt: string }) => {
        return (
            <img
                src={image.src}
                alt={image.alt}
                width={500}
                height={325}
                className="w-full object-contain rounded-2xl group-hover/card:shadow-xl cursor-pointer text-transparent"
            />
        )
    }, [])
    return (
        <div className='animate-scroll inline-flex w-full flex-nowrap overflow-hidden h-[320px]'>
            <ul className='animate-scroll flex items-center justify-center md:justify-start'>
                <div className='h-[320px] w-[350px] bg-gradient-to-r from-white to-white-1000/20 z-10 left-0 absolute'></div>
                <Marquee direction='right'
                         pauseOnHover
                         className='hover:blur-[4px] items-center justify-center'
                >
                {images.map((image, i) => (
                    <li key={i} className="ml-5 md:w-[330px]">
                        {renderImage(image)}
                    </li>
                ))}
                </Marquee>
                <div className='h-[320px] w-[350px] bg-gradient-to-l from-white to-white-1000/20 z-10 right-0 absolute'></div>
            </ul>
        </div>
    )
}

export default ImageScrolle;