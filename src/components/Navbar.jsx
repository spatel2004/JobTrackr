import styles from '../css/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return(
        <div className={styles.navbarContainer}>
            <p className={styles.navbarDate}> Friday, May 3, 2025 </p>
            <div className={styles.navbarSearchAndAddJobContainer}>
                <button className={styles.navbarSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#D1D5DB",}} />
                </button>
                <button className={styles.addJob}>
                    <FontAwesomeIcon icon={faPlus} style={{color: "#FFFFFF",}} />
                    <p className={styles.addJobTitle}> Add Job </p>
                </button>
            </div>
        </div>
    );
}

export default Navbar 
