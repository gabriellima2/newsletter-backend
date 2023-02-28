import { HttpStatusCode } from "./http-status-code";

interface DefaultHeadersParams<T> {
  statusCode: HttpStatusCode;
  body: T;
}

export const defaultHeaders = <T>({
  statusCode,
  body,
}: DefaultHeadersParams<T>) => {
  return {
    headers: {
      "Content-Type": "application/json",
      statusCode,
      body,
    },
  };
};
