import axios from "axios";
import { books } from "../store/features/books/booksInterfaces";
import { instanse } from "../service";

export const getApi = async (path:string)=>{
    try{
        const response = await instanse.get(path);
        return response.data
    }catch(e){
        console.log(e);
    }finally{
        console.log('done')
    }
}



export const getCourses = async (path:string)=>{
    try{
        const response = await axios.get(path);
        return response.data
    }catch(e){
        console.log(e)
    }finally{
        console.log('done')
    }

}

export async function postData(path:string, arg:books){
    try{
        const response = await instanse.post(path, arg)
        return response.data
    }catch(e){
        console.log(e)
    }finally{
        console.log('done')
    }

}