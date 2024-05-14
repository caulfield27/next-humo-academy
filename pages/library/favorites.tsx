"use client"

import styles from './favorites.module.css'
import { getUserFavorites, useBooks } from '@/src/store/features/books/books';
import useDispatchHook from '@/src/hooks/dispatchHook';
import useSelectorHook from '@/src/hooks/selectorHook';
import { IFavBooks, books } from '@/src/store/features/books/booksInterfaces';


const Favorites = () => {
    // const dispatch = useDispatchHook()
    // const favoriteBooks = useSelectorHook((state)=> state.books.favorites)
    // const dropdown = useSelectorHook((state)=> state.books.dropdown)
    const favoriteBooks = useBooks((state)=> state.favorites)
    const dropdown = useBooks((state)=> state.dropdown)
   
    const handleRead = (event: any) =>{
        window.open(event.target.value, '_blank')
    }

    const handleDelete = (currentBook:books)=>{
        const filtered = favoriteBooks.filter((book) => book.currentBook.id !== currentBook.id)
        const getFavStorage = localStorage.getItem('favorites')
        if(getFavStorage){
            const removedBook = JSON.parse(getFavStorage).filter((removeBook: IFavBooks)  => removeBook.currentBook.id !== currentBook.id)
            localStorage.setItem('favorites',JSON.stringify(removedBook))
        }
        getUserFavorites(filtered)
    }


    return(
        <>
            
               

                <div className={dropdown ? `${styles.dropdown_adaptive} ${styles.favorites_wrapper}` : styles.favorites_wrapper}>
                    <h1>Your favorite books</h1>
                    <hr />
                    {favoriteBooks.length == 0 ?
                        <div className={styles.noFavorites_wrap}>
                            <h1>You don`t have favorite books yet</h1>
                            <img src='/favorites.png' alt="favorites" />
                        </div> :

                        <div className={styles.favorites_container}>
                            {favoriteBooks.map((book, ind) => {
                                return <div key={ind + 1} className={styles.favorite_card}>
                                    <img src={book.currentBook.image} alt={book.currentBook.name} />
                                    <div className={styles.favoriteCard_content}>
                                        <div className={styles.favorite_text}>
                                            <span className={styles.favorite_name}>{book.currentBook.name}</span>
                                            <span className={styles.favorite_author}>{book.currentBook.author}</span>
                                        </div>
                                        <div className={styles.favorite_button}>
                                            <button value={book.currentBook.pdf} className={styles.read} onClick={handleRead}>read</button>
                                            <button className={styles.delete} onClick={() => handleDelete(book.currentBook)}>delete</button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>

                    }
                </div>



            </>

    )
}
 
export default Favorites;