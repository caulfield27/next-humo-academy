"use client"
import styles from './booksModal.module.css'
import { useEffect, useState } from 'react'
import { setBooksModal } from '@/src/store/features/books/books'
import useDispatchHook from '@/src/hooks/dispatchHook'
import useSelectorHook from '@/src/hooks/selectorHook'
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { setFavorites,removeFavorite } from '@/src/store/features/books/books'

export const BooksModal = ()=>{
    const dispatch = useDispatchHook()
    const {currentBook, booksModal, favorites} = useSelectorHook((state)=>state.books)
    const [rating, setRating] = useState(Number)
   
     

    const handleCloseModal = (e:any)=>{
        if(e.target.classList.contains(styles.modal_container)){
            dispatch(setBooksModal(false))
        }

    }

    useEffect(()=>{
        document.addEventListener('click', handleCloseModal)
        return ()=>{
            document.removeEventListener('click', handleCloseModal)
        }
    }, [])
    
    useEffect(()=>{
        setRating(currentBook.rating)
    },[currentBook.rating])
    
    const handleFavorites = (book: any)=>{
        if(favorites.some(favBook => favBook.id === book.id)){
        
            dispatch(removeFavorite(book))
        
        }else{
            dispatch(setFavorites(book))
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
                            <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                            <span>{currentBook.rating}</span>
                        </div>
                        <div className={styles.modal_button}>
                            <button onClick={() => handleFavorites(currentBook)}>
                                <FavoriteIcon className={favorites.some(book => book.id === currentBook.id) ? styles.favoriteActive : styles.favorite} />
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
