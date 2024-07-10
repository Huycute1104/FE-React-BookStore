import baseURL from '../api/axiosCustomize'
const postLogin = async (data) => {
    return await baseURL.post(`auth/login`, data);
};
export {postLogin}