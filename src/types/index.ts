export type SuccessResponse<T, S> = {
  success: true;
  data: T;
  meta?: S;
};

export type Error<T> = {
  code: string;
  message: string;
  details?: T;
};

export type ErrorResponse<T> = {
  success: false;
  error: Error<T>;
};
