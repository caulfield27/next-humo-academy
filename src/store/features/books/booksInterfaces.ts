export interface books{
    name:string,
    author:string,
    image: string,
    pdf: string,
    rating: number,
    released: string,
    description: string,
    id: number
}

export interface init{
    booksList: books[],
    loading: boolean,
    booksModal:boolean,
    dropdown: boolean,
    currentBook: books,
    favorites: books[]
}
