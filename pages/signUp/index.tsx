import styles from '../../styles/auth.module.css'
import { useState } from 'react';
import useAuth, { handleSignup } from '@/src/store/features/auth/auth';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useBooks } from '@/src/store/features/books/books';
import useSWR from 'swr';
import { getUsers } from '@/src/utils/api';




const SignUp = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('')
    const {data} = useSWR('http://localhost:3001/users', getUsers)
    const {setAuth, setCurrentUser} = useAuth()
    const navigate = useRouter()
    const [validation, setValidation] = useState({
    email: false,
    password: false,
    fullName:false
  });

    const dropdown = useBooks((state)=> state.dropdown)
    
    const handleSignupSubmit = (e:any) =>{
        e.preventDefault()
        handleSignup(email, fullName, password, navigate, data)
    }

    const isDataComplete = email.trim() !== '' && password.trim() !== '' && password.trim() !== '';

    return (
        <>
                <div className={dropdown ? `${styles.login_wrapper} ${styles.dropdown_login_wrapper}` : styles.login_wrapper}>
                    <div className={styles.login_container}>
                        <div className={styles.login}>
                            <h2 className={styles.header_text}>Sign up</h2>
                            <form className={styles.form} onSubmit={handleSignupSubmit}>
                                <div className={styles.input_wrap}>
                                    <input className={styles.input} type='email'
                                        placeholder='@email'
                                        value={email}
                                        onFocus={() => setValidation({ ...validation, email: false })}
                                        onBlur={() => setValidation({ ...validation, email: true })}
                                        onChange={(e) => { setEmail(e.target.value) }} />
                                    {email == '' && validation.email &&
                                        <span>поле должно быть заполненным</span>
                                    }

                                </div>
                                <div className={styles.input_wrap}>
                                    <input className={styles.input} type='text'
                                        placeholder='full name'
                                        value={fullName}
                                        onFocus={() => setValidation({ ...validation, fullName: false })}
                                        onBlur={() => setValidation({ ...validation, fullName: true })}
                                        onChange={(e) => { setFullName(e.target.value) }} />
                                    {fullName == '' && validation.fullName &&
                                        <span>поле должно быть заполненным</span>
                                    }

                                </div>
                                <div className={styles.input_wrap}>
                                    <input className={styles.input} type='password'
                                        placeholder='password'
                                        value={password}
                                        onFocus={() => setValidation({ ...validation, password: false })}
                                        onBlur={() => setValidation({ ...validation, password: true })}
                                        onChange={(e) => { setPassword(e.target.value) }} />
                                    {password == '' && validation.password &&
                                        <span>поле должно быть заполненным</span>
                                    }
                                </div>
                                <Button type='submit' variant='contained' disabled={!isDataComplete}>Sign up</Button>

                            </form>
                            <footer className={styles.login_footer}>
                                <span>You already have account?</span>
                                <Link href="/login">log in</Link>
                            </footer>
                        </div>
                    </div>
                </div>


        </>
        
    )
}

export default SignUp