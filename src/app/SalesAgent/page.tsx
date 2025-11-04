'use client'
import Nave from "@/app/Nave";
import Bottom from "@/app/Bottom";
import {Button, Form, Input} from "antd";
import '@/app/SalesAgent/salesAgent.css';
import React, {useRef} from "react";


export default function SalesAgent() {
    const [form] = Form.useForm();

    // 提交后获取表单数据，请求接口，重置表单并关闭
    const onSubmit = () => {
        form.resetFields();

    }

    function sendVerification() {
        alert("验证码已发送");
    }

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            //
        }
    };
        const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        if (file) {
            // 处理文件，例如上传到服务器
            console.log(file);
        }
    };

    return (
        <div>
            <div>
                <Nave/>
            </div>
            <div
                className='w-full aspect-[1440/361] bg-[url(SalesAgent/bg.png)] bg-contain bg-no-repeat flex items-center pl-[20%]'>
                <h1 className='2xl:text-5xl xl:text-4xl text-xl text-white relative z-20'>
                    <p>欢迎成为</p>
                    <p className='mt-5'>燧研智算销售合作伙伴</p>
                </h1>
            </div>
            <div className='w-full py-12 px-20'>
                <div className='w-full border rounded-lg border-gray-200'>
                    <p className='w-full flex justify-center my-12 font-bold text-2xl'>
                        公司信息
                    </p>
                    <Form form={form} labelCol={{span: 6}} wrapperCol={{span: 16}}
                          onFinish={onSubmit} method='post' action='' className='max-w-[500px] !mx-auto'>
                        <Form.Item label='企业名称:' required={true}>
                            <div><Input type='text' placeholder="请输入企业名称" className='input'></Input></div>
                        </Form.Item>
                        <Form.Item label='营业执照编号:' required={true}>
                            <div><Input type='text' placeholder="请输入营业执照编号" className='input'></Input>
                            </div>
                        </Form.Item>
                        <Form.Item label='营业执照图片:' required={true}>
                            <div className='file_input'><p className='align-middle'>+</p><p>上传</p>
                                <button onClick={handleButtonClick}>
                                <input type='file' style={{ display: 'none' }} className='file_input' onChange={handleFileChange} ref={fileInputRef}>
                                </input></button></div>
                        </Form.Item>
                        <Form.Item label='企业注册地址:' required={true}>
                            <div><Input type='text' placeholder="请输入企业注册地址" className='input'></Input>
                            </div>
                        </Form.Item>
                        <Form.Item label='联系人姓名:' required={true}>
                            <div><Input type='text' placeholder="请输入联系人姓名" className='input'></Input></div>
                        </Form.Item>
                        <Form.Item label='联系人职位:' required={true}>
                            <div><Input type='text' placeholder="请输入联系人职位" className='input'></Input></div>
                        </Form.Item>
                        <Form.Item label='联系人邮箱:' required={true}>
                            <div><Input type='text' placeholder="请输入联系人邮箱" className='input'></Input></div>
                        </Form.Item>
                        <Form.Item label='管理员手机号码:' required={true}>
                            <div className='flex'>
                                <Input type='text' placeholder="请输入管理员手机号码" className='input'></Input>
                                <Button onClick={sendVerification} className='ml-5 border'>获取验证码</Button>
                            </div>
                        </Form.Item>
                        <Form.Item label='短信验证码:' required={true}>
                            <div><Input type='text' placeholder="请输入短信验证码" className='input'></Input></div>
                        </Form.Item>
                        <Form.Item>
                            <div className='w-full flex'>
                                <button type='submit' onClick={onSubmit}
                                        className='w-[80px] h-[30px] justify-items-center m-auto rounded-lg cursor-pointer bg-[#ff5722] text-white border-[#ff5722]'>提交信息
                                </button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div>
                <Bottom/>
            </div>
        </div>
    )
}