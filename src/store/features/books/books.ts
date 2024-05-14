import { create } from "zustand";
import { IFavBooks, IStates, books } from "./booksInterfaces";

// const initialState:init = {
//     booksList: [],
//     loading: false,
//     booksModal: false,
//     dropdown: false,
//     currentBook:{name:'',author:'',image:'',pdf:'',rating:0,released:'',description:'',id:0},
//     favorites: [],
// };


type Actions = {
    setBooksModal:(payload: boolean) => void,
    setCurrentBook: (payload: books) => void,
    setDropdown: (payload: boolean) => void,
    getUserFavorites: (payload: IFavBooks[])=> void
}

export const useBooks = create<IStates & Actions>((set)=> ({
    booksModal: false,
    dropdown: false,
    currentBook:{name:'',author:'',image:'',pdf:'',rating:0,released:'',description:'',id:0},
    favorites: [],
    setBooksModal: (payload) => set(()=> ({booksModal: payload})),
    setCurrentBook: (payload) => set(()=> ({currentBook: payload})),
    setDropdown: (payload) => set(() => ({dropdown: payload})),
    getUserFavorites: (payload) => set(()=> ({favorites: payload})),
}))

export const {getUserFavorites, setBooksModal, setCurrentBook, setDropdown} = useBooks(state => state)

// export const setUserFavBooks = (favBooks:IFavBooks[])=> (getState:Function)=> {
//     const {auth} = getState()
//     console.log(auth)
//     const currentUser = auth.currentUser
//     const  customFav = favBooks.filter(book => book.userToken === currentUser[0].userToken)
//     getUserFavorites(customFav)
// }










// import { ThunkAction, createSlice, Action } from "@reduxjs/toolkit";
// import { IFavBooks, books, init } from "./booksInterfaces";




// const booksSlice = createSlice({
//     name:'books',
//     initialState,
//     reducers:{
//         setBooksModal: (state, {payload})=>{
//             state.booksModal = payload
//         },
//         setCurrentBook: (state, {payload})=>{
//             state.currentBook = payload
//         },
//         setFavorites: (state, {payload})=>{
//             localStorage.setItem('favorites', JSON.stringify(payload))
//         },
//         removeFavorite: (state, {payload})=>{
//             localStorage.setItem('favorites', JSON.stringify(payload))
//         },
//         setDropdown: (state, {payload})=>{
//             state.dropdown = payload
//         },
//         getUserFavorites: (state, {payload})=>{
//             state.favorites = payload
//         },
//         resetFavorites: (state) =>{
//             state.favorites = []
//         }
       
//     }
// })




// export const setUserFavBooks = (favBooks:IFavBooks[]) => (dispatch:Function, getState:Function) => {
//     const {auth} = getState()
//     const currentUser = auth.currentUser
//     const  customFav = favBooks.filter(book => book.userToken === currentUser[0].userToken)
//     dispatch(getUserFavorites(customFav))
// }


// export const { setBooksModal, 
//     setCurrentBook, removeFavorite,setFavorites,
//     setDropdown,getUserFavorites, resetFavorites} = booksSlice.actions

// export default booksSlice

