import { create } from "zustand";
import { IFavBooks, IStates, books } from "./booksInterfaces";
import { IUserItem } from "../auth/auth";
import { setToStorage } from "@/src/utils/getFromStorage";
import { devtools } from "zustand/middleware";


type Actions = {
    setBooksModal:(payload: boolean) => void,
    setCurrentBook: (payload: books) => void,
    setDropdown: (payload: boolean) => void,
    getUserFavorites: (payload: IFavBooks[])=> void,
    resetFavBooks: ()=> void,
    incrementCounter: (payload:number)=> void,
    decrementCounter: (payload: number)=> void,
    getBooksCounter: (payload:number)=> void,
    resetNotifications: (payload: number)=> void

}

export const useBooks = create<IStates & Actions>()(devtools((set)=> ({
    booksModal: false,
    dropdown: false,
    currentBook:{name:'',author:'',image:'',pdf:'',rating:0,released:'',description:'',id:0},
    favorites: [],
    booksNotifications: 0,
    setBooksModal: (payload) => set(()=> ({booksModal: payload})),
    setCurrentBook: (payload) => set(()=> ({currentBook: payload})),
    setDropdown: (payload) => set(() => ({dropdown: payload})),
    getUserFavorites: (payload) => set(()=> ({favorites: payload})),
    resetFavBooks: () => set(()=> ({favorites: []})),
    incrementCounter:(payload)=>{
        setToStorage<number>('favBooksCounter', payload === null ? 0 : payload);
        set(()=> ({booksNotifications:payload}))
    },
    decrementCounter:(payload)=>{
        setToStorage<number>('favBooksCounter', payload);
        set(()=> ({booksNotifications:payload}))
    },
    getBooksCounter: (payload)=> set(()=> ({booksNotifications: payload})),
    resetNotifications: (payload)=>{
        setToStorage<number>('favBooksCounter', payload);
        set(()=> ({booksNotifications: payload}))
    }
})))



export const setUserFavBooks = (favBooks:IFavBooks[], getUserFavorites:Function,currentUser:IUserItem[])=>{
    const  customFav = favBooks.filter(book => book.userToken === currentUser[0].userToken)
    getUserFavorites(customFav)
}










