/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user :{
        email:"",
        password:"",
        roleId:""
    },
    token:""
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login:(state,{payload})=>{
        state.isAuthenticated = true,
        state.user = {
            ...payload.user
        };
        state.token = payload.token
        // localStorage.setItem('token', payload.token);
    }
  }
})

export const {login} = authSlice.actions
export default authSlice.reducer