import {NORMA_API} from "./burger-api";

export const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const request = async (endpoint: string, options = {}) => {
    const res = await fetch(`${NORMA_API}${endpoint}`, options);
    return checkResponse(res);
};
