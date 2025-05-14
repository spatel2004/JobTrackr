import styles from '../css/sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
    return(
        <div className={styles.sidebarContainer}> 
            <div className={styles.sidebarIconAndTitleContainer}> 
                <FontAwesomeIcon className={styles.sidebarIcon} icon={faSuitcase} style={{color: "#8367F4",}}/>
                <p className={styles.sidebarTitle}> JobTrackr </p>
            </div>
            <div className={styles.sidebarPagesContainer}>
                <button className={styles.sidebarPage}> 
                    <FontAwesomeIcon className={styles.sidebarPageIcon} icon={faTableColumns} style={{color: "#9CA3AF",}}/>
                    <p className={styles.sidebarDashboardTitle}> Dashboard </p>
                </button>
                <button className={styles.sidebarPage}> 
                    <FontAwesomeIcon className={styles.sidebarPageIcon} icon={faSuitcase} style={{color: "#9CA3AF",}}/>
                    <p className={styles.sidebarApplicationsTitle}> Applications </p>
                </button>
                <button className={styles.sidebarPage}> 
                    <FontAwesomeIcon className={styles.sidebarPageIcon} icon={faCalendar} style={{color: "#9CA3AF",}} />
                    <p className={styles.sidebarCalendarTitle}> Calendar </p>
                </button>
                <button className={styles.sidebarPage}> 
                    <FontAwesomeIcon className={styles.sidebarPageIcon} icon={faSignal} style={{color: "#9CA3AF",}}/>
                    <p className={styles.sidebarAnalyticsTitle}> Analytics </p>
                </button>
                <button className={styles.sidebarPage}> 
                    <FontAwesomeIcon className={styles.sidebarPageIcon} icon={faGear} style={{color: "#9CA3AF",}} />
                    <p className={styles.sidebarSettingsTitle}> Settings </p>
                </button>
            </div>
        </div>

    );
}

export default Sidebar

