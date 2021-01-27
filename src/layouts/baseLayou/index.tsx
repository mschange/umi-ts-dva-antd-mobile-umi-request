import React from 'react';
import { Location } from 'umi';
// 全局挂载iconfont
import '@/static/iconfont/iconfont.css';

// 在这里进行登录路由拦截

interface BaseProps {
  location: Location
}

const baseLayou: React.FC<BaseProps> = props => {
  const { location } = props;
  console.log(location, 'location')
  return (
    <div>
      {props.children}
    </div>
  );
};

export default baseLayou;
