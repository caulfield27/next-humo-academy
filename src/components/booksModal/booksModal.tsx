"use client"
import styles from './booksModal.module.css'
import { useEffect, useState } from 'react'
import { useBooks } from '@/src/store/features/books/books'
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Swal from 'sweetalert2'
import { IFavBooks } from '@/src/store/features/books/booksInterfaces'
import useAuth from '@/src/store/features/auth/auth'
import { getFromStorage, setToStorage } from '@/src/utils/getFromStorage';

export const BooksModal = () => {
    const currentBook = useBooks((state)=> state.currentBook)
    const booksModal = useBooks((state)=> state.booksModal)
    const favorites = useBooks((state)=> state.favorites)
    const setBooksModal = useBooks((state)=> state.setBooksModal)
    const getUserFavorites = useBooks((state)=> state.getUserFavorites)
    let booksNotifications = useBooks((state)=> state.booksNotifications)
    const incrementNot = useBooks((state)=> state.incrementCounter)
    const decrementNot = useBooks((state)=> state.decrementCounter)
    const {isAuth, currentUser} = useAuth((state) => state)
    


    const handleCloseModal = (e: any) => {
        if (e.target.classList.contains(styles.modal_container)) {
            setBooksModal(false)
            document.body.classList.remove('open_modal')
        }

    }



    useEffect(() => {
        document.addEventListener('click', handleCloseModal)
        return () => {
            document.removeEventListener('click', handleCloseModal)
        }
    }, [])

    const handleFavorites = (book: any) => {
        const getFavStorage = getFromStorage('favorites')
    
        if (isAuth) {
            if (favorites.some(favBook => favBook.currentBook.id === book.id)) {
                const filtered = favorites.filter((book) => book.currentBook.id !== currentBook.id)
                getUserFavorites(filtered)
                if(booksNotifications !== 0){
                    decrementNot(booksNotifications-=1)
                }
                if(getFavStorage){
                    const removedBook = getFavStorage.filter((removeBook: IFavBooks)  => removeBook.currentBook.id !== book.id)
                    setToStorage('favorites', removedBook)
                    
                }
                

            } else {
                if (getFavStorage) {
                    const favBooks = { userToken: currentUser[0].userToken, currentBook: book }
                    getFavStorage.push(favBooks)
                    setToStorage('favorites', getFavStorage)
                    const newFavList = [...favorites, favBooks]
                    getUserFavorites(newFavList)
                }
                incrementNot(booksNotifications+=1)

            }
        } else {
            Swal.fire({
                title: "Error",
                text: 'login for settung your favorite books',
                icon: "info",
                footer: '<a href="\login">login</a>'

            })
        }

    }

    return (
        <>
            <div className={booksModal ? `${styles.modal_container} ${styles.display_block}` : styles.display_none}>
                <div className={styles.modal_content}>
                    <div className={styles.left_wrap}>
                        <img src={currentBook.image} alt={currentBook.name}></img>
                        <h2>{currentBook.name}</h2>
                    </div>
                    <div className={styles.right_wrap}>
                        <div className={styles.rating_button}>
                            <div className={styles.rating}>
                                <Rating name="half-rating-read" value={currentBook.rating} precision={0.5} readOnly />
                                <span>{currentBook.rating}</span>
                            </div>
                            <div className={styles.modal_button}>
                                <button onClick={() => handleFavorites(currentBook)}>
                                    <FavoriteIcon className={favorites.some(book => book.currentBook.id === currentBook.id) ? styles.favoriteActive : styles.favorite} />
                                    <span className={styles.favoriteText}>Add to favorites</span>
                                </button>
                                <button></button>
                            </div>

                        </div>
                        <div className={styles.modal_textWrap}>
                            <span className={styles.head}>Author:</span>
                            <span className={styles.second}>{currentBook.author}</span>
                        </div>
                        <div className={styles.modal_textWrap}>
                            <span className={styles.head}>Released:</span>
                            <span className={styles.second}>{currentBook.released}</span>
                        </div>
                        <span className={styles.head}>Description:</span>
                        <div className={styles.description}>
                            <p>{currentBook.description}</p>
                        </div>



                    </div>
                </div>

            </div>

        </>

    )

}

export default BooksModal
