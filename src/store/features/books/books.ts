import { ThunkAction, createSlice, Action } from "@reduxjs/toolkit";
import { IFavBooks, books, init } from "./booksInterfaces";


const initialState:init = {
    booksList: [],
    loading: false,
    booksModal: false,
    dropdown: false,
    currentBook:{name:'',author:'',image:'',pdf:'',rating:0,released:'',description:'',id:0},
    favorites: [],
};

const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        setBooksModal: (state, {payload})=>{
            state.booksModal = payload
        },
        setCurrentBook: (state, {payload})=>{
            state.currentBook = payload
        },
        setFavorites: (state, {payload})=>{
            localStorage.setItem('favorites', JSON.stringify(payload))
        },
        removeFavorite: (state, {payload})=>{
            localStorage.setItem('favorites', JSON.stringify(payload))
        },
        setDropdown: (state, {payload})=>{
            state.dropdown = payload
        },
        getUserFavorites: (state, {payload})=>{
            state.favorites = payload
        },
        resetFavorites: (state) =>{
            state.favorites = []
        }
       
    }
})




export const setUserFavBooks = (favBooks:IFavBooks[]) => (dispatch:Function, getState:Function) => {
    const {auth} = getState()
    const currentUser = auth.currentUser
    const  customFav = favBooks.filter(book => book.userToken === currentUser[0].userToken)
    dispatch(getUserFavorites(customFav))
}


export const { setBooksModal, 
    setCurrentBook, removeFavorite,setFavorites,
    setDropdown,getUserFavorites, resetFavorites} = booksSlice.actions

export default booksSlice

