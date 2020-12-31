import { Reducer, Effect, Subscription } from 'umi';
import { query } from './service';
interface UserModelType {
  namespace: 'users';
  state: {};
  reducers: {
    setList: Reducer;
  };
  effects: {
    query: Effect;
  };
  subscriptions: {
    onLoad: Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    setList(state, { type, payload }) {
      console.log('payload: ', payload);
      return {
        ...state,
        list: payload,
      };
    },
  },
  effects: {
    *query({ type, payload }, { put, call }) {
      const { data } = yield call(query); // 异步调用service
      // yield put() 同步调用reducer
      yield put({
        type: 'setList',
        payload: data,
      });
    },
  },
  subscriptions: {
    onLoad({ dispatch, history }, done) {
      console.log('ROUTER: ', history);
      return history.listen((location) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default UserModel;
