export type SuccessResponse<D, M> = {
  success: true;
  data: D;
  meta?: M;
};

export type Error = {
  code: string;
  message: string;
};

export type ErrorResponse = {
  success: false;
  error: Error;
};
