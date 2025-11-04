'use client'
import {Button, Form, Input, Modal} from 'antd';
import {useState} from "react";


export default function Login() {
    const [isVsiable, setVisiable] = useState(false);
    const [form] = Form.useForm();
    const [useVerificationCode, setVerificationCode] = useState(true);
    const [register, isRegister] = useState(false);
    // 打开弹窗
    const open = () => {
        setVisiable(true);
    };
    //关闭弹窗
    const close = () => {
        setVisiable(false);
        form.resetFields();
    };
    //点击确定提交表单
    const submit = () => {
        form.submit();
        form.resetFields();
    }
    // 提交后获取表单数据，请求接口，重置表单并关闭
    const onSubmit = () => {
        form.resetFields();
        if (!register) {
            alert("登录");
        } else {
            alert("注册")
        }

    }

    function useVerification() {
        const nextStage = !useVerificationCode;
        setVerificationCode(nextStage);
    }

    function sendVerification() {
        alert("验证码已发送");
    }

    function useRegister() {
        const next = !register;
        isRegister(next);
    }

    return (
        <div>
            <div
                className=" relative group/btn min-w-[100px]  flex justify-center items-center text-black text-xs rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <p className='flex items-center px-4' onClick={open}>
                    <i className='iconfont icon-user_3'></i>
                    登录
                </p>
                <span
                    className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute left-0 h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                <span
                    className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
            </div>
            <Modal
                wrapClassName="modal-wrap"
                okText="登录"
                cancelButtonProps={{shape: 'round'}}
                okButtonProps={{shape: 'round'}}
                width={600}
                open={isVsiable}
                destroyOnHidden={true}
                title={[
                    <h3 key='1' className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>欢迎使用燧研智算</h3>,
                    <p key='2' className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-5'>登录使用完整功能</p>,
                ]}
                onCancel={close}
                onOk={submit}
                key='1'
                footer={[
                    <div key='1'>
                        <div className='cursor-pointer flex justify-center'>
                            <button className='mb-4 text-xs flex items-center justify-center cursor-pointer text-orange-500'
                                    style={{display: !register ? 'block' : 'none'}}
                                    onClick={useVerification}>{!useVerificationCode ? '使用密码登录' : '使用验证码登录'}
                            </button>
                        </div>
                        <div className='flex justify-center cursor-pointer'>
                            <label style={{display: register ? 'block' : 'none'}}>
                                <input type="checkbox" name="myCheckbox" defaultChecked={false}/>
                                我已阅读《服务协议》与《通用条款与条件》
                            </label>
                        </div>
                        <div className='flex justify-center cursor-pointer bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium'>
                            <button onClick={onSubmit} className='cursor-pointer'>{!register ? '登录 →' : '注册 →'}
                            </button>
                        </div>
                        <div className='flex justify-center cursor-pointer'>
                            <button onClick={useRegister} className='w-auto mt-1 underline-offset-8 border-b-zinc-800 cursor-pointer'>
                                {!register ? '还没有账号，去注册' : '已有账号，去登陆'}
                            </button>
                        </div>
                    </div>
                ]}
            >
                <div className="form" key='2'>
                    <Form form={form} labelCol={{span: 4}} wrapperCol={{span: 16}}
                          onFinish={onSubmit} method='post' action=''>
                        <Form.Item style={{display: register ? 'block' : 'none'}}
                                   label="账号类型"
                        >
                            <label>
                                <input type="radio" name="myRadio" value="option1"/>
                                个人用户
                            </label>
                            <label>
                                <input type="radio" name="myRadio" value="option2"/>
                                企业用户
                            </label>
                        </Form.Item>
                        <Form.Item style={{display: register ? 'block' : 'none'}}
                                   label="公司名称"
                        >
                            <div><Input type="text" placeholder="请输入"/></div>
                        </Form.Item>
                        <Form.Item style={{display: register ? 'block' : 'none'}}
                                   label="用户名称"
                        >
                            <div><Input type="text" placeholder="请输入"/></div>
                        </Form.Item>
                        <Form.Item
                            label="手机号"
                        >
                            <div><Input type="text" placeholder="请输入"/></div>
                        </Form.Item>
                        <Form.Item style={{display: register ? 'block' : 'none'}}
                                   label="验证码"
                        >
                            <div className='flex'>
                                <Input type="text" placeholder="请输入"/>
                                <Button className='cursor-pointer border-[#ff5722] ml-5'
                                        style={{display: register ? 'block' : 'none'}}
                                        onClick={sendVerification}>获取验证码
                                </Button>
                            </div>
                        </Form.Item>
                        <Form.Item
                            style={{display: !register ? 'block' : 'none'}}
                            label={useVerificationCode ? '密码' : '验证码'}
                        >
                            <div className='flex cursor-pointer'>
                                <Input type="text" placeholder="请输入"/>
                                <div className='w-auto'>
                                    <Button className='cursor-pointer ml-5'
                                            style={{display: !useVerificationCode && !register ? 'block' : 'none'}}
                                            onClick={sendVerification}>获取验证码
                                    </Button>
                                </div>
                            </div>
                        </Form.Item>
                        <Form.Item
                            style={{display: register ? 'block' : 'none'}}
                            label='密码'
                        >
                            <div><Input type="text" placeholder="请输入"/></div>
                        </Form.Item>
                        <Form.Item style={{display: register ? 'block' : 'none'}}
                                   label="重复密码"
                        >
                            <div><Input type="text" placeholder="请输入"/></div>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    );
}
