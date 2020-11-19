import request from 'src/api/request';

export const fetchUsers = () => request({
  url: `api/?results=20`,
  method: 'GET',
});
