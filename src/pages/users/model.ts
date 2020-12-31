import { Reducer, Effect, Subscription } from 'umi';
import { query, save, remove } from './service';
interface UserModelType {
  namespace: 'users';
  state: {};
  reducers: {
    setList: Reducer;
  };
  effects: {
    query: Effect;
    save: Effect;
    remove: Effect;
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
    *save({ payload }, { put, call }) {
      console.log('save payload: ', payload);
      const data = yield call(
        save,
        payload,
      ); /** 注意这里的写法，不能直接调用方法 */
    },
    *remove({ payload }, { put, call }) {
      console.log('to remove: ', payload);
      yield call(remove, payload.id);
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
