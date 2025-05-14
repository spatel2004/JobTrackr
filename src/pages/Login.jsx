import styles from '../css/login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import image from '../assets/laptop-typing.jpeg'
import { Link } from 'react-router-dom'

function Login() {
    return(
        <div className={styles.login}>
            <div className={styles.leftSide}>
                <Link to="/" className={styles.homeLink}> <div className={styles.returnToHome}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#7E62F4",}} />
                    <p className={styles.returnHome}> Back to Home </p>
                </div> </Link>
                <FontAwesomeIcon className={styles.icon} icon={faSuitcase} style={{color: "#7E62F4"}}/>
                <p className={styles.welcomeBackTitle}> Welcome back to JobTrackr </p>
                <p className={styles.loginDescription}> Log in to manage your job applications </p>

                <div className={styles.loginContainer}>
                    <div className={styles.loginTitleAndIcon}>
                        <FontAwesomeIcon className={styles.loginIcon} icon={faRightToBracket} style={{color: "#7E62F4"}} />
                        <p className={styles.loginTitle}> Log in to your account </p>
                    </div>
                    <p className={styles.emailDescription}> Enter your email and password to continue </p>
                    <div className={styles.emailLogin}>
                        <div className={styles.emailTitleAndIcon}>
                            <FontAwesomeIcon className={styles.envelope} icon={faEnvelope} style={{color: "#94A3B8"}}/>
                            <p className={styles.emailTitle}> Email </p>
                        </div>
                        <input type="text" placeholder="name@example.com" className={styles.emailInput}/>
                    </div>
                    <div className={styles.passwordLogin}>
                        <div className={styles.passwordTitleAndIcon}>
                            <FontAwesomeIcon className={styles.lock} icon={faLock} style={{color: "#94A3B8"}} />
                            <p className={styles.passwordTitle}> Password </p>
                        </div>
                        <input type="text" placeholder="**********" className={styles.passwordInput} />
                    </div>
                    <button className={styles.loginBtn}>
                        <FontAwesomeIcon className={styles.loginBtnIcon} icon={faRightToBracket} style={{color: "#FFFFFF"}}/>
                        <p className={styles.loginBtnText}> Log In </p>
                    </button>

                    <p className={styles.noAccount}> Don't have an account? <Link to="/signup" className={styles.linkToSignUp}> <span className={styles.signUpText}> Sign up </span> </Link> </p>
                </div>
            </div>
            <img src={image} className={styles.loginImage} />
        </div>
    );
}

export default Login