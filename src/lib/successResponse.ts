import {SuccessResponse} from '../types';

const successResponse = <D, M>(data: D, meta?: M): SuccessResponse<D, M> => {
  return {
    success: true,
    data,
    meta,
  };
};

export default successResponse;
