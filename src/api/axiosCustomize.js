import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:7050/api/",
    // withCredentials: false,
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'ngrok-skip-browser-warning': 'true',
    // },
});

export default instance;
