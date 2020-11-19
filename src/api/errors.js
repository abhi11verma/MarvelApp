import _ from 'lodash';

export class NetworkError {
}


export class ApiResponseError {
  constructor(message, response = null) {
    this.message = message;
    this.response = response;
  }
}


export class ApiAuthenticationError extends ApiResponseError {
}

export class ApiAuthorizationError extends ApiResponseError {
}

export class ApiNotFoundError extends ApiResponseError {
}

export class ApiDataInvalidError extends ApiResponseError {
}

export class ApiConflictError extends ApiResponseError {
}

export const parseErrorMessage = (message) => _.isArray(message) ?
  {common: _.head(message)} :
  _.mapValues(message, (item) => _.head(item));
