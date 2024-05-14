
import { books } from "../store/features/books/booksInterfaces";

export const getApi = async (path:string)=>{
    try{
        const response = await fetch(path);
        const data = await response.json()
        return data
    }catch(e){
        console.log(e);
    }finally{
        console.log('done')
    }
}

export async function getUsers(api: string){
    const response = await fetch(api)
    const data = await response.json()
    return data
}


export const getCourses = async (path:string)=>{
    try{
        const response = await fetch(path);
        const data = await response.json()
        return data
    }catch(e){
        console.log(e)
    }finally{
        console.log('done')
    }

}

export async function postData(path:string, arg:books){
    try{
        const response = await fetch(path, {
            method: 'POST',
            body: JSON.stringify(arg)
        })
    }catch(e){
        console.log(e)
    }finally{
        console.log('done')
    }

}