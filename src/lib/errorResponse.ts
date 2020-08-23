import {ErrorResponse} from '../types';

const errorResponse = (code: string, message: string): ErrorResponse => {
  return {
    success: false,
    error: {
      code,
      message,
    },
  };
};

export default errorResponse;
