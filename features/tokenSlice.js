import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'now',
    initialState: {
       token: null     
    },

    reducers: {
        changed: (state, actions) =>   {
            state.token = actions.payload
        },
        

      

    }
})

export const { changed  } = tokenSlice.actions

  export default tokenSlice.reducer