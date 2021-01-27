import React from 'react';
import { connect } from 'umi';
import {
  ConnectState,
  ConnectProps,
  UserModelState
} from '@/models/connect';
interface HomeProps extends ConnectProps {
  user: UserModelState
}
const Home:React.FC<HomeProps> = (props) => {
  console.log(props, '看看')
  return (
    <div>
      首页
    </div>
  );
}

export default connect(({user}:ConnectState) => ({user}))(Home);
