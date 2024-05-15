import styles from '../enterCourseModal/enterCourse.module.css'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useCourseStore } from '@/src/store/features/courses/courses'


const CourseModal = ()=>{
    const {courseModal, setCourseModal} = useCourseStore()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (event: any) => {

        event.preventDefault();

        const newStudent = {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim()
        };
        const getStudentsStorage = typeof window !== 'undefined' ?
        localStorage.getItem('students') : null  
        const students = getStudentsStorage ? JSON.parse(getStudentsStorage) : []
        const alredySigned = students.some(
            (student:any) =>
                student.name.toLowerCase() === newStudent.name.toLowerCase() &&
                student.email.toLowerCase() === newStudent.email.toLowerCase() &&
                student.phone.toLowerCase() === newStudent.phone.toLowerCase()
        )
        if (alredySigned) {
            Swal.fire({
                title: 'Sign up error',
                text: 'you already signed up',
                icon: 'info',
                confirmButtonText: 'ok'
            })
            return
        }

        const currentStudents = [...students, newStudent];
        localStorage.setItem('students', JSON.stringify(currentStudents));
        Swal.fire({
            title: 'form successed',
            text: 'your application confirmed succesfully',
            icon: 'success'
        })


        setName('');
        setEmail('');
        setPhone('');
        setCourseModal(false);

    }


    

    const handleCloseModal = (e:any)=>{
        if(e.target.classList.contains(styles.coursesModal_container)){
            setCourseModal(false)
        }

    }

    useEffect(()=>{
        document.addEventListener('click', handleCloseModal)
        return ()=>{
            document.removeEventListener('click', handleCloseModal)
        }
    }, [])

    const isDataComplete = name.trim() !== '' && email.trim() !== '' && phone.trim() !== ''; 

    return (
        <div className={courseModal ? `${styles.coursesModal_container} ${styles.display_block}` : styles.display_none}>
            <div className={styles.courses_modal}>
                <div className={styles.modal_header}>
                    <center><h1>Sign up<br/>for Humo academy courses</h1></center>
                    <img src='/humoLogo.png' alt="humo logo" />
                </div>
                <form className={styles.form} action="submit" onSubmit={handleSubmit}>
                    <div className={styles.input_field} style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <input className={styles.input} type="text" placeholder='Your name'
                        value={name}
                        name='name'
                        onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className={styles.input_field} style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <input className={styles.input} type="text" placeholder='Your email'
                        value={email}
                        name='email'
                        onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.input_field}  style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <input className={styles.input} type="text" placeholder='Your phone number'
                        value={phone}
                        name='phone'
                        onChange={(e)=> setPhone(e.target.value) }/>
                    </div>

                    
                    <Button disabled={!isDataComplete} type='submit'  variant='contained' color='error'>
                        Sign up application
                    </Button>
                </form>
            </div>
        </div>
    )

}

export default CourseModal