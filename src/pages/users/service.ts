import { request } from 'umi';

export const remove = async (id) =>
  request(`/api/users/${id}`, {
    method: 'delete',
    params: { id },
  });

export const save = async (user) =>
  request(`/api/users/${user.id}`, {
    method: 'put',
    data: { ...user },
  });

export const query = async () => {
  return request(
    '/api/users', // 代理在.umirc.ts中配置
    {
      method: 'get',
    },
  );
  /* return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ])
    }, 2000)
  }) */
};
