import styles from '../css/interview.module.css'

function Interview({company, position, time, day}) {
    return(
        <div className={styles.interview}>
            <div className={styles.leftSide}>
                <p className={styles.interviewCompany}> {company} </p>
                <p className={styles.interviewPosition}> {position} </p>
                <p className={styles.interviewTime}> {time} </p>
            </div>
            <p className={styles.interviewDay}> {day} </p>
        </div>
    );
}

export default Interview