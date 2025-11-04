'use client'
import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) { // 100可以根据需要调整
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 清理函数，移除事件监听器
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // 空依赖数组表示这个effect只在组件挂载时运行一次

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {showButton && (
                <button onClick={scrollToTop}
                        className='z-100 w-[40px] h-[40px] drop-shadow-lg fixed bottom-[20px] right-[20px] cursor-pointer rounded-full bg-white hover:bg-gray-100'>
                    <i className='iconfont icon-zhiding '></i>
                </button>
            )}
        </div>
    );
};

export default ScrollButton;
