
import { Reducer, Effect, history } from 'umi';
import { Toast } from 'antd-mobile';
import { fakeAccountLogin } from '@/services/login';
// 定义state接口
export interface UserModelState {
  userInfo: {
    name?: string;
    icon?: string;
    userid?: string;
  }
}

// 定义userModel的接口类型
interface UserModelType {
  namespace: 'user',
  state: UserModelState,
  reducers: {
    saveUser: Reducer<UserModelState>
  },
  effects: {
    login: Effect;
  };
}

const userModel: UserModelType = {
  namespace: 'user',
  state: {
    userInfo: {},
  },
  reducers: {
    saveUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.status === 200) {
        yield put({
          type: 'saveUser',
          payload: { userInfo: { ...response } },
        });
        Toast.success('登录成功~');
        history.replace('/');
      } else {
        Toast.fail(response.msg || '系统开小差，请稍后再试~');
      }
    },
  }
}

export default userModel;
