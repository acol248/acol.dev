interface StrapiRequestOptions {
  method?: string;
  body?: object;
  authToken?: string;
  headers?: object;
}

/**
 * Simply run a request to a strapi api endpoint
 *
 * @param url string url to fetch data from
 * @param opts object options to pass to fetch
 * @param opts.method string method to use for the request
 * @param opts.body object body to send with the request
 * @param opts.authToken authorization token
 * @param opts.headers object headers to send with the request
 *
 * @returns data from response
 */
export const strapiRequest = async <T>(
  url: string,
  opts?: StrapiRequestOptions
): Promise<T> => {
  const { method = "GET", body, authToken, headers } = opts || {};

  const reqHeaders = new Headers({ "Content-Type": "application/json" });

  if (authToken) reqHeaders.append("Authorization", `Bearer ${authToken}`);

  if (headers) {
    Object.entries(headers).forEach(([key, value]) => {
      reqHeaders.append(key, value);
    });
  }

  const _url = `${import.meta.env.VITE_API_URL}/api${url.startsWith("/") ? url : `/${url}`}`;
  const res = await fetch(_url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: reqHeaders,
  });

  if (!res.ok) throw new Error(`Error fetching data: ${res.statusText}`);

  const json = await res.json();
  const data = (json as { data: T }).data;

  if ((data as any)?.error) throw new Error(`Error fetching data: ${(data as any).error.message}`);

  return data;
};
