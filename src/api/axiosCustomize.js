import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    // withCredentials: false,
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     'ngrok-skip-browser-warning': 'true',
    // },
});

export default instance;
