export default async function fetcher<JSON = any>(input: RequestInfo): Promise<JSON> {
  const res = await fetch(input);
  return res.json();
}

const base = 'https://ryftr1.deta.dev';

export function request<T = any>(url: string): Promise<T> {
  return fetch(`${base}${url}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
