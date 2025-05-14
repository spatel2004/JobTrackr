import styles from '../css/recentapplication.module.css'
function RecentApplication(){
    return(
        <div className={styles.recentApplication}>
            <div className={styles.leftSide}>
                <p className={styles.letter}> P </p>
                <div className={styles.companyAndPosition}>
                    <p className={styles.position}> Front End Developer </p>
                    <p className={styles.company}> Google </p>
                </div>
            </div>
            <div className={styles.rightSide}>
                <p className={styles.date}> May 1, 2025 </p>
                <p className={styles.status}> •  Applied </p>
            </div>
        </div>
    );
}

export default RecentApplication