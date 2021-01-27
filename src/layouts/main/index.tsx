import React from 'react';
import { Location } from 'umi';
import BottomNav from '@/components/BottomNav'
import style from './index.less';

// 定义interface接口
interface MainProps {
  location: Location
}
const BasicLayout: React.FC<MainProps> = props => {
  const { location } = props;
  return (
    <div className={style.main}>
      {props.children}
      <footer>
        <BottomNav pathname={location.pathname} />
      </footer>
    </div>
  );
};

export default BasicLayout;
