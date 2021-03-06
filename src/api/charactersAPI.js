import request from 'src/api/request';
import {MARVEL_KEY, PRIVATE_MARVEL_KEY} from 'src/MarvelKey';
import md5 from 'md5';

const auth = () => {
  const ts = Date.now();
  const authHash = md5(ts + PRIVATE_MARVEL_KEY + MARVEL_KEY);
  return `ts=${ts}&apikey=${MARVEL_KEY}&hash=${authHash}`;
};

export const fetchCharactersByName = (params) => request({
  url: `v1/public/characters?${params}&${auth()}`,
  method: 'GET',
});




