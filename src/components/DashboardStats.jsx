import Navbar from '../components/Navbar.jsx'
import styles from '../css/dashboardstats.module.css'
import StatusBox from './StatusBox.jsx'
import RecentApplication from '../components/RecentApplication.jsx'
import Interview from '../components/Interview.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

function DashboardStats() {
    return(
        <div className={styles.dashboardStatsContainer}>
            <Navbar />
            <p className={styles.dashboardStatsTitle}> Dashboard </p>
            <div className={styles.statusContainer}>
                <StatusBox title="Total Applications" number="24" iconName={faSuitcase}/>
                <StatusBox title="Pending" number="14" iconName={faCalendar}/>
                <StatusBox title="Interviews" number="8" iconName={faArrowTrendUp} />
                <StatusBox title="Offers" number="2" iconName={faSignal} />
            </div>
            <div className={styles.container}>
                <div className={styles.recentApplicationsContainer}>
                    <p className={styles.recentApplicationsTitle}> Recent Applications </p>
                    <RecentApplication />
                    <RecentApplication />
                    <RecentApplication />
                    <RecentApplication />
                </div>
                <div className={styles.upcomingInterviewsContainer}>
                    <p className={styles.upcomingInterviewsTitle}> Upcoming Interviews </p>
                    <Interview company="Apple" position="React Developer" time="2:00 PM - 3:00 PM" day="Today" />
                    <Interview company="Apple" position="React Developer" time="2:00 PM - 3:00 PM" day="Today" />
                    <Interview company="Apple" position="React Developer" time="2:00 PM - 3:00 PM" day="Today" />
                </div>
            </div>
        </div>
    );
}

export default DashboardStats