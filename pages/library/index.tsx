"use client"
import { useEffect, useState } from "react"; 
import { getApi, setCurrentBook, setBooksModal } from "@/src/store/features/books/books";
import { Pagination } from "@mui/material";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import styles from './index.module.css'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useDispatchHook from "@/src/hooks/dispatchHook";
import { books } from "@/src/store/features/books/booksInterfaces";
import useSelectorHook from "@/src/hooks/selectorHook";
import BooksModal from "@/src/components/booksModal/booksModal";

const Library = () => {
    const dispatch = useDispatchHook()
    const {booksList, favorites, dropdown, loading } = useSelectorHook((state)=> state.books);
    const [searchValue, setSeacrhValue] = useState('')
    const [page, setPage] = useState(1)
    useEffect(()=>{
        dispatch(getApi(page))
        
    },[dispatch, page])

    function handleRead(e:any){
        window.open(e.target.value, '_blank')
    }

    function handleModal(books: books){
        dispatch(setBooksModal(true))
        dispatch(setCurrentBook(books))

    }

    const searchBooks = booksList.filter((book)=>{
        return book.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })

    const handleChangePage = (event: any, value: number) => {
        setPage(value);
    };

    return (
        <>
            <BooksModal/>
            <div className={dropdown ? `${styles.wrapper_adaptive} ${styles.wrapper}` : styles.wrapper}>
                <div className={styles.library_header}>
                    <h1>Programming books recommended by<br />Humo Academy</h1>

                </div>
                <div className={styles.library_navigation}>
                   <input style={{padding:5,outline:'none',}} placeholder="search..." onChange={(e) => setSeacrhValue(e.target.value)} className={styles.searchInput} />
                </div>

                <Stack spacing={2} className={styles.pagination_wrap}>
                    <Pagination className={styles.pagination} count={3} page={page} onChange={handleChangePage} />
                    <div className={styles.favorite_wrap}>
                        <Link className={styles.favorite} href='/library/favorites'>Favorite books</Link>
                        <div className={favorites.length > 0 ? styles.indicator : styles.indicatorDisplayNone}>
                            <span className={favorites.length > 0 ? styles.indicator_count : styles.indicatorCountNone}>
                                {favorites.length}
                            </span>
                        </div>
                    </div>
                </Stack>
                <div className={styles.library_container}>

                    {loading ? <div className={styles.library_loading}>
                        <CircularProgress />
                    </div> :
                        searchBooks.map((book, id) => {
                            return <div key={id} className={styles.book_card}>
                                <img src={book.image} alt={book.name} />
                                <div className={styles.card_content}>
                                    <div className={styles.card_text}>
                                        <span className={styles.name}>{book.name}</span>
                                        <span className={styles.author}>{book.author}</span>
                                    </div>
                                    <div className={styles.card_button}>
                                        <Button
                                            value={book.pdf}
                                            onClick={handleRead}
                                            variant='outlined'
                                            color='success'>
                                            read
                                        </Button>
                                        <Button
                                            onClick={() => handleModal(book)}
                                            variant='outlined'
                                            color='primary'>
                                            show more
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>


        </>
    )
    }
 
export default Library;