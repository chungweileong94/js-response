import {SuccessResponse} from '../types';

const successResponse = <T, S>(data: T, meta?: S): SuccessResponse<T, S> => {
  return {
    success: true,
    data,
    meta,
  };
};

export default successResponse;
