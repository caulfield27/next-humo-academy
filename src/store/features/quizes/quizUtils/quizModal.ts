import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface modal{
    modal:boolean
}
const initialState:modal = {
    modal:false
}

const quizModalSlice = createSlice({
    name: 'quizModal',
    initialState,
    reducers: {
        setQuizModal: (state:modal, {payload}:PayloadAction<boolean>) =>{
            state.modal = payload
        }
    }
})

export const {setQuizModal} = quizModalSlice.actions

export default quizModalSlice