"use client"

import { useState } from 'react'
import styles from './postModal.module.css'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { books } from '@/src/store/features/books/booksInterfaces'
import Swal from 'sweetalert2'
import { postData } from '@/src/utils/api'
import { isLInk } from '@/src/utils/checkLinkValidate'
import { useSWRConfig } from 'swr'

export interface IModal{
    setModal:Function,
    page: number
}

const PostModal = ({page, setModal}: IModal) =>{
    const {mutate} = useSWRConfig()
    const [postedData, setPosterData] = useState<books>({
        name: '',
        author: '',
        image: '',
        pdf: '',
        rating: null,
        released: '',
        description: '',
        id:Date.now()
    })
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
        setModal(false)
        Swal.fire({
            text:'Your book is added to humo library',
            icon: 'success',
            confirmButtonText: 'ok'
        }).then((result)=>{
            if(result.isConfirmed){
                mutate(`http://localhost:3001/books?_page=${page}`, postData(`http://localhost:3001/books`, postedData)) 
            }
        })
        document.body.classList.remove('open_modal')
       
    }
    
    
    function handleModalClose(){
        setModal(false)
        document.body.classList.remove('open_modal')
    }

    const isDataComplede = postedData.name.trim() !== '' && postedData.author.trim() !== '' && postedData.image.trim() !== ''
                            && postedData.pdf.trim() !== '' && postedData.rating !== null && postedData.released.trim() !== ''
                            && postedData.description.trim() !== '' && isLInk(postedData.image) && isLInk(postedData.pdf)
                            && postedData.rating < 6;
                            


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
                        <span>required field</span>
                    }
                    <TextField id="outlined-basic" name="author" label="author" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, author: false})}
                     onBlur={()=> setValidation({...validation, author: true})}/>
                     {postedData.author === '' && validation.author && 
                         <span>required field</span>
                     }
                    <TextField id="outlined-basic" name="image" label="poster src" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, image: false})}
                     onBlur={()=> setValidation({...validation, image: true})}/>
                     {postedData.image === '' && validation.image && 
                         <span>required field</span>
                     }
                     {!isLInk(postedData.image) && validation.pdf && <span>field must be matched with link</span>}
                    <TextField id="outlined-basic" name="pdf" label="pdf link" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, pdf: false})}
                     onBlur={()=> setValidation({...validation, pdf: true})}/>
                     {postedData.pdf === '' && validation.pdf && 
                         <span>required field</span>
                     }
                     {!isLInk(postedData.pdf) && validation.pdf && <span>field must be matched with link</span>}
                    <TextField type='number' name='rating' id="outlined-basic" label="rating" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, rating: false})}
                     onBlur={()=> setValidation({...validation, rating: true})}/>
                     {postedData.rating === null && validation.rating && 
                         <span>required field</span>
                     }
                     {postedData.rating === null ? null :
                      postedData.rating > 5 && validation.rating && <span>rating can't be higher then 5</span>}
                    <TextField id="outlined-basic" name="released" label="released" variant="outlined" onChange={handleDataChange}
                     onFocus={()=> setValidation({...validation, released: false})}
                     onBlur={()=> setValidation({...validation, released: true})}/>
                     {postedData.released === '' && validation.released && 
                         <span>required field</span>
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
                            <span>required field</span>
                        }
                </div>
                <div className={styles.postModal_footer}>
                    <Button disabled={!isDataComplede} variant='contained' color='success' onClick={handlePost}>
                        ADD TO LIBRARY
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PostModal