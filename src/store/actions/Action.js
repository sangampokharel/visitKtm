import {createAction,createReducer} from '@reduxjs/toolkit';

//{type:'SignIn',payload:1}
const SignIn=createAction('SignIn')

createReducer([],{
    //key :value
    //actions:functions (event=>event handler)

    SignIn:(state,action)=>{
        state.push({
            user:action.payload.user  
        })
    }
})
