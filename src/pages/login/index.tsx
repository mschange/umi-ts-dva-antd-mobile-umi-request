import React from 'react';
import { connect } from 'umi';
import { InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

// 引入css
import style from './index.less';

import {
  ConnectProps,
} from '@/models/connect'

// 定义rc-form接口类型
interface LoginFormProps extends ConnectProps {
  form: {
    getFieldProps: Function;
    getFieldsValue: Function;
  };
}

const Login: React.FC<LoginFormProps> = ({ form, location, dispatch }) => {
  const { getFieldProps, getFieldsValue } = form;
  // 登录
  const handleSubmit = () => {
    let value = getFieldsValue();
    dispatch({ type: 'user/login', payload: value });
  }
  return (
    <div className={style.loginWrapper}>
      <InputItem
        {...getFieldProps('username')}
        type="text"
        clear
        placeholder="请输入用户名"
      >账号</InputItem>
      <InputItem
        {...getFieldProps('password')}
        type="password"
        clear
        placeholder="请输入密码"
      >密码</InputItem>
      <Button type="primary" onClick={handleSubmit}>
        登录
      </Button>
    </div>
  );
}

export default connect()(createForm()(Login))
