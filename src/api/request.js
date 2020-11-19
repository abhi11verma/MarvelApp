import axios from 'axios';
import deepMapKeys from 'deep-map-keys';
import _, {camelCase, identity, isArray, isNull, isPlainObject, isUndefined, snakeCase} from 'lodash';
import {normalize} from 'normalizr';
import config from 'src/config';
import * as errors from 'src/api/errors';
import {omitNulls} from 'src/helper';


const {API_PATH, API_BASE_URL} = config;


const serializeAuth = ({email, password}) => ({
  username: email,
  password,
});


const toCamelCase = d => deepMapKeys(d, k => camelCase(k));


const toSnakeCase = d => deepMapKeys(d, k => snakeCase(k));


const parse = (d, {parseFn, normalizeCase}) => {
  const res = normalizeCase
    ? toCamelCase(d)
    : d;

  return parseFn(res);
};


const serialize = (d, {normalizeCase}) => normalizeCase && (isPlainObject(d) || isArray(d))
  ? toSnakeCase(d)
  : d;

const addIdToken = (headers, auth) => {
  const idToken = _.get(auth, 'idToken');
  return _.merge({}, headers, idToken && {token: idToken});
};

const parseConf = ({
                     url,
                     method,
                     data = null,
                     auth = null,
                     schema = null,
                     params = null,
                     normalizeCase = true,
                     normalizeParamCase = true,
                     parse: parseFn = identity,
                     headers = {},
                   }) => ({
  parse,

  schema,

  normalizeCase,

  parseFn,

  options: omitNulls({
    method,

    url: API_BASE_URL + API_PATH + url,

    params: !isNull(params)
      ? serialize(params, {normalizeCase: normalizeParamCase})
      : null,

    data: !isNull(data)
      ? serialize(data, {normalizeCase})
      : null,

    headers: addIdToken(headers, auth),

    auth: !_.isEmpty(auth) && !_.isEmpty(auth.email)
      ? serializeAuth(auth)
      : null,
  }),
});


const imageData = ({
                     path = null,
                     key = 'image',
                     name = 'image.png',
                     type = 'image/png',
                   }) => {
  const d = new FormData();

  d.append(key, {
    uri: path,
    name,
    type,
  });

  return d;
};


const requestSuccess = (res, {schema, ...opts}) => Promise.resolve(res.data)
  .then(d => parse(d, opts))
  .then(d => !isNull(schema)
    ? normalize(d, schema)
    : d);


const requestFailureErrorResponse = e => {
  const ErrorType = {
    400: errors.ApiDataInvalidError,
    401: errors.ApiAuthorizationError,
    403: errors.ApiAuthenticationError,
    404: errors.ApiNotFoundError,
    409: errors.ApiConflictError,
  }[e.response.status] || errors.ApiResponseError;

  return new ErrorType(e.message, e.response);
};


const requestFailure = e => {
  let res = e;

  if (!isUndefined(e.response)) {
    res = requestFailureErrorResponse(e);
  } else if (e.message === 'Network Error') {
    res = new errors.NetworkError();
  }
  console.log(e);

  return Promise.reject(res);
};

const request = rawConf => {
  const {options, ...conf} = parseConf(rawConf);
  console.log(options.method + ' ' + options.url);
  return axios(options)
    .then(res => requestSuccess(res, conf), requestFailure);
};

// const request = rawConf => {
//   const {options, ...conf} = parseConf(rawConf);
//   console.log(options.method + ' ' + options.url);
//   const start = new Date().getTime();
//   return axios(options)
//     .then(res => {
//       console.log(`Performance: ${options.method} ${options.url} ${new Date().getTime() - start} ms`);
//       return requestSuccess(res, conf)
//     }, requestFailure);
// };


export default request;

export {
  imageData,
  serializeAuth,
};
