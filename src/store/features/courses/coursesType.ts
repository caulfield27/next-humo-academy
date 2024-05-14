export interface coursesType{
    name:string,
    mentor: string,
    languages:string[],
    image: string,
    duration:string,
    price: string,
    status: string,
    courseStart: string,
    category:string,
    id:string,
}

export interface IFavCourse{
    favCourse:coursesType,
    userToken:string
}