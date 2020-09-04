import {ErrorResponse} from '../types';

const errorResponse = <T>(code: string, message: string, details?: T): ErrorResponse<T> => {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
  };
};

export default errorResponse;
