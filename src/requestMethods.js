import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA1OGJlMGYxMTMyZjkyNjU0OTg1ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDE2ODA4MywiZXhwIjoxNjQwNDI3MjgzfQ.MdzdaA4x3EjGU8dduuUzm_S85hJ5DH1JMNfHBo16wfM"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
});