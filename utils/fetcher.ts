import axios from 'axios';

import { IGroup } from 'definitions/Bikes.d';

export default async function fetcher<JSON = any>(input: RequestInfo): Promise<JSON> {
  const res = await fetch(input);
  return res.json();
}

const base = 'https://ryftr1.deta.dev';

export async function get<T = any>(url: string): Promise<T> {
  try {
    const { data } = await axios.get(`${base}${url}`);
    return data;
  } catch (error) {
    throw new Error('Error while obtaining data');
  }
}

export async function post<T = any>(url: string, body: IGroup | null): Promise<T> {
  try {
    const { data } = await axios.post(`${base}${url}`, body);
    return data;
  } catch (error) {
    throw new Error('Error while pushing data');
  }
}
