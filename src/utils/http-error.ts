import axios from 'axios';
//check error message from server
type Response = {
  code: number;
  message: string;
  status: string;
  details: {
    '@type': string;
    reason: string;
    domain: string;
  }[];
  '@type': string;
  reason: string;
  domain: string;
};
type ErrorResponse = {
  error: Response;
};
const axiosErrorData = (response: Response) => {
  switch (response.code) {
    case 400:
      return handleCase400(response);
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not Found';
    case 500:
      return 'Internal Server Error';
    default:
      return 'unknown';
  }
};
const httpError = (error: unknown) => {
  if (
    axios.isAxiosError<ErrorResponse>(error) &&
    typeof error.response?.data?.error === 'object'
  ) {
    return axiosErrorData(error.response.data.error);
  }
  if (error instanceof Error) {
    return error.message;
  }
};

const handleCase400 = (response: Response) => {
  if (response.details) {
    return response.details[0].reason;
  }
  if (response.message) {
    return response.message;
  }
};
export default httpError;
