import { create } from "zustand";
import { IFavBooks, IStates, books } from "./booksInterfaces";
import { IUserItem } from "../auth/auth";


type Actions = {
    setBooksModal:(payload: boolean) => void,
    setCurrentBook: (payload: books) => void,
    setDropdown: (payload: boolean) => void,
    getUserFavorites: (payload: IFavBooks[])=> void,
    resetFavBooks: ()=> void
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
    resetFavBooks: () => set(()=> ({favorites: []}))
}))



export const setUserFavBooks = (favBooks:IFavBooks[], getUserFavorites:Function,currentUser:IUserItem[])=>{
    const  customFav = favBooks.filter(book => book.userToken === currentUser[0].userToken)
    getUserFavorites(customFav)
}










