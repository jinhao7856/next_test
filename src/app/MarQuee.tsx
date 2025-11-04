import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// @ts-ignore
const MarQuee = ({children} ) => {
    const controls = useAnimation();

    useEffect(() => {
        const animation = async () => {
            await controls.start({ x: [-100, 100, -100] }); // 这里定义了动画的开始和结束位置，你可以根据需要调整这些值。
            await controls.start({ x: [100, -100, 100] });
        };
        animation();
    }, [controls]);

    return (
        <motion.div
            style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}
            animate={controls}
            transition={{ repeat: Infinity, duration: 10000, ease: "linear" }} // 设置动画重复和持续时间

        >
            {children}
        </motion.div>
    );
};

export default MarQuee;