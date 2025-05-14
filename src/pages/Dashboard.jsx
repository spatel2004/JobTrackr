import styles from '../css/dashboard.module.css'
import Sidebar from '../components/Sidebar.jsx'
import DashboardStats from '../components/DashboardStats.jsx'

function Dashboard() {
    return(
        <div className={styles.dashboardContainer}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.dashboardstats}>
                <DashboardStats />
            </div>
        </div>
    );
}
export default Dashboard