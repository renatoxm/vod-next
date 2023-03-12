import axios, { AxiosError } from 'axios';

export const handleAxiosError = (e: unknown) => {
  const error = e as Error | AxiosError;
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // The client was given an error response (5xx, 4xx)
      console.error(`Axios error header:`, error.response.headers);
      console.error(`Axios error status:`, error.response.status);
      console.error(`Error data:`, error.response.data);
    } else if (error.request) {
      // The client never received a response, and the request was never left
      console.error(`Axios request error:`, error.request);
    }
  } else {
    console.error(error.message);
  }
};
