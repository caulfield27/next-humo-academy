import { FunctionComponent, useEffect, useState } from 'react'
import styles from './postModal.module.css'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { books } from '@/src/store/features/books/booksInterfaces'
import Swal from 'sweetalert2'
import { useSWRConfig } from 'swr'
import { postData } from '@/src/utils/api'

export interface IModal{
    setModal:Function,
    page: number
}

const PostModal:FunctionComponent<IModal> = ({page, setModal}) =>{
    const {mutate} = useSWRConfig()

    const initialData = {
        name: '',
        author: '',
        image: '',
        pdf: '',
        rating: null,
        released: '',
        description: '',
        id:Date.now()

    }
    
    const [postedData, setPosterData] = useState<books>(initialData)
    const [validation, setValidation] = useState({
        name: false,
        author:false,
        image:false,
        pdf: false,
        rating: false,
        released: false,
        description: false

    })
    function handleDataChange(e:any){
        setPosterData({...postedData, [e.target.name]: e.target.value})

    }

    function handlePost(){
        mutate(`/books${page}`,postData(`/books`, postedData))
        setModal(false)
        document.body.classList.remove('open_modal')
        Swal.fire({
            icon: 'success',
            text: 'your favorite book added to humo library'
        })
        // mutate(`http://localhost:3001/books${page}`)
    }
    
    
    function handleModalClose(){
        setModal(false)
        document.body.classList.remove('open_modal')
    }

    const isDataComplede = postedData.name.trim() !== '' && postedData.author.trim() !== '' && postedData.image.trim() !== ''
                            && postedData.pdf.trim() !== '' && postedData.rating !== null && postedData.released.trim() !== ''
                            && postedData.description.trim() !== ''
                            
    

    return (
        <div className={styles.postModal_container}>
            <div className={styles.postModal_content}>
                <div className={styles.postModal_header}>
                    <button onClick={handleModalClose}>&#215;</button>
                </div>
                <div className={styles.postModal_body}>
                    <TextField id="outlined-basic" name="name" label="name" variant="outlined" onChange={handleDataChange} 
                    onFocus={()=> setValidation({...validation, name: false})}
                    onBlur={()=> setValidation({...validation, name: true})}/>
                    {postedData.name === '' && validation.name && 
                        <span>поле должно быть заполненным</span>
                    }
                    <TextField id="outlined-basic" name="author" label="author" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, author: false})}
                     onBlur={()=> setValidation({...validation, author: true})}/>
                     {postedData.author === '' && validation.author && 
                         <span>поле должно быть заполненным</span>
                     }
                    <TextField id="outlined-basic" name="image" label="poster src" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, image: false})}
                     onBlur={()=> setValidation({...validation, image: true})}/>
                     {postedData.image === '' && validation.image && 
                         <span>поле должно быть заполненным</span>
                     }
                    <TextField id="outlined-basic" name="pdf" label="pdf link" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, pdf: false})}
                     onBlur={()=> setValidation({...validation, pdf: true})}/>
                     {postedData.pdf === '' && validation.pdf && 
                         <span>поле должно быть заполненным</span>
                     }
                    <TextField type='number' name='rating' id="outlined-basic" label="rating" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, rating: false})}
                     onBlur={()=> setValidation({...validation, rating: true})}/>
                     {postedData.rating === null && validation.rating && 
                         <span>поле должно быть заполненным</span>
                     }
                    <TextField id="outlined-basic" name="released" label="released" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, released: false})}
                     onBlur={()=> setValidation({...validation, released: true})}/>
                     {postedData.released === '' && validation.released && 
                         <span>поле должно быть заполненным</span>
                     }
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        name="description"
                        onChange={handleDataChange}
                        defaultValue=""
                        onFocus={()=> setValidation({...validation, description: false})}
                        onBlur={()=> setValidation({...validation, description: true})}/>
                        {postedData.description === '' && validation.description && 
                            <span>поле должно быть заполненным</span>
                        }
                </div>
                <div className={styles.postModal_footer}>
                    <Button disabled={!isDataComplede} variant='outlined' color='success' onClick={handlePost}>
                        ADD TO LIBRARY
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PostModal