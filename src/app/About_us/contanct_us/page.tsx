'use client'
import React from 'react';
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import '@/app/icon/iconfont.css';
import ScrollButton from "@/app/ScrollButton";
import {Input, Form} from "antd";

export default function Page() {
    const [form] = Form.useForm();

    // 提交后获取表单数据，请求接口，重置表单并关闭
    const onSubmit = () => {
        form.resetFields();
        form.submit();
    }

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div className='bg-white pb-16 px-10 xl:px-0'>
                <div>
                    <div className='px-40 bg-gray-900 h-full pt-20'>
                        <div className='max-w-[1280px] m-auto'>
                            <p className='font-bold text-white text-3xl pb-8 pt-15'>联系我们</p>
                            <p className='text-white font-light w-9/12 text-base text-justify  leading-8'>
                                办事地点: 浙江省宁波市鄞州区创苑路98号
                                联系电话: 0574-87919101
                                联系邮箱: marketingmanager@sharein.cc
                            </p>
                            <button className='mt-10 p-[3px] relative cursor-pointer'>
                                <div
                                    className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg'></div>
                                <div
                                    className='px-8 py-2  bg-violet-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
                                    获取报价
                                </div>
                            </button>
                            <p className='text-white font-light text-xs mt-5 pb-10'>
                                <i className='iconfont icon-suo mr-2 text-[12px]'></i>
                                所有上传都是安全和保密的
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full  pt-36 pb-20  flex items-center justify-center'>
                    <div className='flex-1 max-w-[1280px] border relative rounded p-16 px-64 border-gray-200'>
                        <h1 className='mb-10 text-3xl font-bold flex justify-center'>联系我们获取实时信息</h1>
                        <div className='mt-5 flex flex-col space-y-2 w-full'>
                            <Form form={form} labelCol={{span: 6}} wrapperCol={{span: 16}}
                                  onFinish={onSubmit} method='post' action='' className='w-full'>
                                <Form.Item label='输入您的姓名:'>
                                    <div className='flex justify-start'><Input type='text' placeholder="请输入" className='input'></Input></div>
                                </Form.Item>
                                <Form.Item label='输入您的公司名称:'>
                                    <div><Input type='text' placeholder="请输入" className='input'></Input>
                                    </div>
                                </Form.Item>
                                <Form.Item label='输入您的手机号:'>
                                    <div><Input type='text' placeholder="请输入" className='input'></Input>
                                    </div>
                                </Form.Item>
                                <Form.Item label='输入您的邮箱地址:'>
                                    <div><Input type='text' placeholder="请输入" className='input'></Input></div>
                                </Form.Item>
                                <Form.Item label='输入您的留言:'>
                                    <div><Input type='text' placeholder="请输入" className='input'></Input></div>
                                </Form.Item>
                                <Form.Item>
                                    <div className='w-full flex justify-center'>
                                        <button type='submit' onClick={onSubmit}
                                                className='w-[100px] h-[30px] m-auto rounded-lg cursor-pointer font-bold bg-black text-white '>发送信息
                                        </button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
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
    );
};