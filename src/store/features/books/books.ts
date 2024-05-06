import { ThunkAction, createSlice, Action } from "@reduxjs/toolkit";
import { init } from "./booksInterfaces";


const favoritesFromLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('favorites') : null;

export const getApi = (page:any):ThunkAction<void, unknown,unknown,Action<string>>=> async (dispatch:any)=>{
    try{
        dispatch(setDownload(true))
        const response = await fetch(`http://localhost:3001/books?_page=${page}&_per_page=10`);
        const data = await response.json();
        dispatch(setBooks(data.data));
    }catch(e){
        console.log(e);
    }finally{
        dispatch(setDownload(false));
    }
}


const initialState:init = {
    booksList: [],
    loading: false,
    booksModal: false,
    dropdown: false,
    currentBook:{name:'',author:'',image:'',pdf:'',rating:0,released:'',description:'',id:0},
    favorites: favoritesFromLocalStorage ? JSON.parse(favoritesFromLocalStorage) : [],
};

const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        setBooks:(state, {payload})=>{
            state.booksList = payload
        },
        setDownload: (state, {payload})=>{
            state.loading = payload
        },
        setBooksModal: (state, {payload})=>{
            state.booksModal = payload
        },
        setCurrentBook: (state, {payload})=>{
            state.currentBook = payload
        },
        setFavorites: (state, {payload})=>{
            state.favorites.push(payload)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        },
        removeFavorite: (state, {payload})=>{
            state.favorites = state.favorites.filter((book: { id: number; }) => book.id !== payload.id)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
        },
        setDropdown: (state, {payload})=>{
            state.dropdown = payload
        }
       
    }
})

export const {setBooks, setDownload, setBooksModal, 
    setCurrentBook, setFavorites, removeFavorite,
    setDropdown} = booksSlice.actions

export default booksSlice

