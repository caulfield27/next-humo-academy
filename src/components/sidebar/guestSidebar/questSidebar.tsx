import styles from './questSidebar.module.css'
import { navLinks } from './questRouts'
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useBooks } from '@/src/store/features/books/books';


const QuestSidebar = () => {
    const icons = [<HomeIcon/>,<LocalLibraryIcon/>,<QuizIcon/>,
    <SchoolIcon/>,<PersonIcon/>,<LoginIcon/>]
    const router = useRouter()
    const {dropdown, setDropdown} = useBooks((state)=> state)
    const currentPage = router.pathname;

    
    return (
        <>  
            
            <div className={styles.sidebar_container}>
                <div className={dropdown ? styles.dropdown_active : styles.dropdown}>
                    {navLinks.map((link, ind) => {
                        const isActive = currentPage === link.path;
                        return <Link key={ind + 1} className={isActive ? `${styles.nav_item} ${styles.active}` : styles.nav_item}
                            href={link.path}>
                            {icons[ind]} {link.name}
                        </Link>
                    })}
                    <div className={styles.x_wrap}>
                        <button className={styles.x} onClick={() => { setDropdown(false) }}>&#10006;</button>
                    </div>
                </div>

                <div className={styles.sidebar_header}>
                    <div className={styles.logo_wrap}>
                        <img src='/humoLogo.png' />
                        <h3>Humo Academy</h3>
                    </div>
                    <div className={styles.dropdown_btn} onClick={() => { setDropdown(true) }}>
                        &#9776; Menu
                    </div>


                </div>
                <hr />
                <div className={styles.navigation_wrap}>
                    {navLinks.map((link, key) => {
                        const isActive = currentPage === link.path;
                        return <Link key={key} className={isActive ? 
                            `${styles.nav_item} ${styles.active}` : styles.nav_item}
                            href={link.path}>
                            {icons[key]}{link.name}
                        </Link>
                    
                    })}
                </div>
            </div>
        </>
     );
}
 
export default QuestSidebar;