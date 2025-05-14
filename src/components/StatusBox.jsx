import styles from '../css/statusbox.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
// import { faTableColumns } from '@fortawesome/free-solid-svg-icons';

function StatusBox({title, number, iconName}) {
    return(
        <div className={styles.statusBoxContainer}>
            <p className={styles.title}> {title} </p>
            <FontAwesomeIcon className={styles.statusBoxIcon} icon={iconName} style={{color: "#7E62F4",}}/>
            <p className={styles.number}> {number} </p>
        </div>
    );
}

export default StatusBox