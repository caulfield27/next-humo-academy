import styles from '../enterCourseModal/enterCourse.module.css'
import { Button } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useCourseStore } from '@/src/store/features/courses/courses'
import { getFromStorage, setToStorage } from '@/src/utils/getFromStorage'

interface IStudents {
    name: string,
    email: string,
    phone: string
}

const CourseModal = () => {
    const { courseModal, setCourseModal } = useCourseStore()
   
    const [studentInfo, setStudentInfo] = useState({
        name: '',
        email: '',
        phone: ''
    })
    
    const [validation, setValidation] = useState({
        name:false,
        email: false,
        phone: false
    })   

    const fields = [
        { name: 'name', type: 'text', placeholder: 'enter your full name', value: studentInfo.name, isValid: validation.name },
        { name: 'email', type: 'email', placeholder: 'enter your email', value: studentInfo.email, isValid: validation.email },
        { name: 'phone', type: 'text', placeholder: 'enter your phone', value: studentInfo.phone, isValid: validation.phone}
    ]
   

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const newStudent = {
            name: studentInfo.name.trim(),
            email: studentInfo.email.trim(),
            phone: studentInfo.phone.trim()
        };

        const getStudentsStorage = getFromStorage('students')
        const students: IStudents[] = getStudentsStorage ? getStudentsStorage : []
        const alredySigned = students.some(
            (student) =>
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
        setToStorage('students', currentStudents)
        Swal.fire({
            title: 'form successed',
            text: 'your application confirmed succesfully',
            icon: 'success'
        })


        setStudentInfo({ ...studentInfo, name: '', email: '', phone: '' })
        setCourseModal(false);
    };



const handleFillData = (e: any) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value })
}




const handleCloseModal = (e: any) => {
    if (e.target.classList.contains(styles.coursesModal_container)) {
        setCourseModal(false)
        document.body.classList.remove('open_modal')
    }

}

const handleFocus = (e: ChangeEvent<HTMLInputElement>) =>{
    setValidation({...validation, [e.target.name]: false})
}

const handleBlur = (e: ChangeEvent<HTMLInputElement>)=>{
    setValidation({...validation, [e.target.name] : true})
}   

useEffect(() => {
    document.addEventListener('click', handleCloseModal)
    return () => {
        document.removeEventListener('click', handleCloseModal)
    }
}, [])

const isDataComplete = studentInfo.name.trim() !== '' && studentInfo.email.trim() !== '' && studentInfo.phone.trim() !== '';

return (
    <div className={courseModal ? `${styles.coursesModal_container} ${styles.display_block}` : styles.display_none}>
        <div className={styles.courses_modal}>
            <div className={styles.modal_header}>
                <center><h1>Sign up<br />for Humo academy courses</h1></center>
                <img src='/humoLogo.png' alt="humo logo" />
            </div>
            <form className={styles.form} action="submit" onSubmit={handleSubmit}>
                {fields.map((field) =>
                    <div className={styles.input_field} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        key={field.name}>
                        <input className={styles.input} type={field.type} placeholder={field.placeholder} value={field.value}
                            name={field.name} onChange={handleFillData} onFocus={handleFocus} onBlur={handleBlur}/>
                        {field.value === '' && field.isValid && <span>field required</span>}
                    </div>
                )}
                <Button disabled={!isDataComplete} type='submit' variant='contained' color='error'>
                    Sign up application
                </Button>
            </form>
        </div>
    </div>
)

}

export default CourseModal