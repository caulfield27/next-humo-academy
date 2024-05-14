import Swal from "sweetalert2";
import { create } from "zustand";

export interface IUserItem {
    userName: string,
    userEmail: string,
    userPassword:string,
    userToken: string,
}

export interface IAuth{
    isAuth:boolean,
    currentUser:IUserItem[],
}

type Actions = {
    setAuth: (payload: boolean)=> void,
    setCurrentUser: (payload: IUserItem[])=> void,
    checkIsAuth: (payload: boolean)=> void,


}


const useAuth = create<IAuth & Actions >((set)=>({
    isAuth:false,
    currentUser:[],
    setAuth:(payload)=> set(()=> ({isAuth: payload})),
    setCurrentUser: (payload)=> set(()=> ({currentUser: payload})),
    logOut: ()=> set(()=> ({isAuth: false,currentUser: []})),
    checkIsAuth: (payload)=> set(()=> ({isAuth: payload}))

}))

export default useAuth

export const handleLogin = (email:string, password:string, 
    navigate:any, users:IUserItem[]) => {
        const {setAuth, setCurrentUser} = useAuth((state)=> state)
        const loggedInUser = users.filter((user:IUserItem)=>{
            return user.userEmail === email && user.userPassword === password
        })
        
        if (loggedInUser.length > 0) {
            setAuth(true)
            setCurrentUser(loggedInUser)
            navigate.push('/')
            Swal.fire({
                title: "Loged in successful",
                text: 'welcome to Humo Academy',
                icon: "success"
                
            })
        } else {
            Swal.fire({
                title: 'Login error!',
                text: "This account doesn't exist",
                icon: 'error',
                confirmButtonText: 'try again'  
              })
        }
};




export const handleSignup = (email: string, fullName: string, password: string,
    navigate: any, users: IUserItem[]) => {
    const existingUser = users.find((user: IUserItem) => user.userEmail === email);


    if (existingUser) {
        Swal.fire({
            title: 'Sign up error',
            text: 'User with this email already exist',
            icon: 'error',
            confirmButtonText: 'try again'
        })
    } else {
        const signedUser: IUserItem = {
            userEmail: email,
            userName: fullName,
            userPassword: password,
            userToken: `token!*${email}${password}`,
        }
        // dispatch(setUsers(signedUser));
        try {
            const response = fetch('http://localhost:3001/users', {
                method: 'POST',
                body: JSON.stringify(signedUser)
            })
        } catch (e) {
            console.log(e)
        } finally {
            console.log('done')
        }
    }
    navigate.push('/login')
    Swal.fire({
        title: 'Signed up successfull',
        text: 'login with your email',
        icon: 'success',
        confirmButtonText: 'ok'
    })

}

    


// import { createSlice } from "@reduxjs/toolkit";
// import Swal from "sweetalert2";
// import { IFavBooks, books } from "../books/booksInterfaces";


// const addUsersToStorage = (users:{}[]) =>{
//     localStorage.setItem('users', JSON.stringify(users))
// }




// const usersStorage = typeof localStorage !== 'undefined' ? localStorage.getItem('users') : null
// const currentUserStorage = typeof localStorage !== 'undefined' ? localStorage.getItem('loggedInUser') : null

// export interface IUserItem {
//     userName: string,
//     userEmail: string,
//     userPassword:string,
//     userToken: string,
// }

// export interface auth{
//     isAuth:boolean,
//     users: IUserItem[],
//     currentUser:IUserItem[],
// }

// const initialState:auth = {
//     isAuth:false,
//     users:usersStorage ? JSON.parse(usersStorage) : [],
//     currentUser:currentUserStorage ? JSON.parse(currentUserStorage) : null,
// }


// const authSlice = createSlice({
//     name:'auth',
//     initialState,
//     reducers:{
//         setAuth : (state,{payload})=>{
//             state.isAuth = payload
//         },
//         setUsers : (state, {payload})=>{
//             state.users.push(payload)
//             addUsersToStorage(state.users)
//         },
//         setCurrentUser: (state, {payload})=>{
//             state.currentUser = payload
//             localStorage.setItem('loggedInUser', JSON.stringify(payload));
//         },
//         logOut: (state)=>{
//             state.isAuth = false
//             localStorage.removeItem('loggedInUser')
//             state.currentUser = []
//         },
//         checkIsAuth: (state, {payload})=>{
//                 state.isAuth = payload
//         },
        
        
//     }
// })




// export const handleLogin = (email:string, password:string, 
//     navigate:any) => {
//     return async (dispatch:Function, getState:Function) => {
//         const {users} = getState().auth
        
//         const loggedInUser = users.filter((user:IUserItem)=>{
//             return user.userEmail === email && user.userPassword === password
//         })
        
//         if (loggedInUser.length > 0) {
//             dispatch(setAuth(true))
//             dispatch(setCurrentUser(loggedInUser))
//             navigate.push('/')
//             Swal.fire({
//                 title: "Loged in successful",
//                 text: 'welcome to Humo Academy',
//                 icon: "success"
                
//             })
//         } else {
//             Swal.fire({
//                 title: 'Login error!',
//                 text: "This account doesn't exist",
//                 icon: 'error',
//                 confirmButtonText: 'try again'  
//               })
//         }
//     };
// };



// export const handleSignup = (email:string, fullName:string, password:string,
//     navigate:any) => {
//     return async (dispatch:Function, getState:Function) => {
//         // const favoritesFromLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('favorites') : null;
//         const userFavorites:any = []
//         const { users } = getState().auth; 
//         const existingUser = users.find((user:IUserItem) => user.userEmail === email);
        
//         interface IlogedUser{
//             userEmail:string,
//             userName: string,
//             userPassword: string,
//             userToken:string,
//             userFavoriteBooks:books[] | string,
//         }
//         if (existingUser) {
//             Swal.fire({
//                 title: 'Sign up error',
//                 text:'User with this email already exist',
//                 icon: 'error',
//                 confirmButtonText: 'try again'
//             })
//         } else {
//             const signedUser:IlogedUser = {
//                 userEmail: email,
//                 userName: fullName, 
//                 userPassword: password,
//                 userToken: `token!*${email}${password}`,
//                 userFavoriteBooks: [],
//             }   
//             dispatch(setUsers(signedUser));
//             navigate.push('/login')
//             Swal.fire({ 
//                 title:'Signed up successfull',
//                 text:'login with your email',
//                 icon: 'success',
//                 confirmButtonText:'ok' 
//             })
//         }

//     }
// }


// export const {setAuth, setUsers, setCurrentUser, logOut,checkIsAuth} = authSlice.actions
// export default authSlice