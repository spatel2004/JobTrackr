import styles from '../css/signup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import image from '../assets/laptop-typing.jpeg'
import { Link } from 'react-router-dom'

function Signup() {
    return(
        <div className={styles.signup}>
            <div className={styles.leftSide}>
                <Link to="/" className={styles.homeLink}> <div className={styles.returnToHome}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#7E62F4",}} />
                    <p className={styles.returnHome}> Back to Home </p>
                </div> </Link>
                <FontAwesomeIcon className={styles.icon} icon={faSuitcase} style={{color: "#7E62F4"}}/>
                <p className={styles.welcomeTitle}> Welcome to JobTrackr </p>
                <p className={styles.signupDescription}> Sign in to manage your job applications </p>

                <div className={styles.signupContainer}>
                    <div className={styles.signupTitleAndIcon}>
                        <FontAwesomeIcon className={styles.signupIcon} icon={faUserPlus} style={{color: "#7E62F4"}} />
                        <p className={styles.signupTitle}> Sign Up </p>
                    </div>
                    <p className={styles.enterDetailsTitle}> Enter your details to create an account </p>
                    <div className={styles.firstNameLastNameContainer}>
                        <div className={styles.firstNameContainer}>
                            <div className={styles.firstNameAndIcon}>
                                <FontAwesomeIcon className={styles.firstNameIcon} icon={faUser} style={{color: "#94A3B8"}}/>
                                <p className={styles.firstName}> First name </p>
                            </div>
                            <input type="text" placeholder="John" className={styles.firstNameInput} />
                        </div>
                        <div className={styles.lastNameContainer}>
                            <div className={styles.lastNameAndIcon}>
                                <FontAwesomeIcon className={styles.lastNameIcon} icon={faUser} style={{color: "#94A3B8"}}/>
                                <p className={styles.lastName}> Last name </p>
                            </div>
                            <input type="text" placeholder="Doe" className={styles.lastNameInput} />
                        </div>
                    </div>
                    <div className={styles.emailLogin}>
                        <div className={styles.emailTitleAndIcon}>
                            <FontAwesomeIcon className={styles.envelope} icon={faEnvelope} style={{color: "#94A3B8"}}/>
                            <p className={styles.emailTitle}> Email </p>
                        </div>
                        <input type="text" placeholder="name@example.com" className={styles.emailInput}/>
                    </div>
                    <div className={styles.passwordSignup}>
                        <div className={styles.passwordTitleAndIcon}>
                            <FontAwesomeIcon className={styles.lock} icon={faLock} style={{color: "#94A3B8"}} />
                            <p className={styles.passwordTitle}> Password </p>
                        </div>
                        <input type="text" placeholder="**********" className={styles.passwordInput} />
                    </div>
                    <div className={styles.confirmPasswordSignup}>
                        <div className={styles.confirmPasswordTitleAndIcon}>
                            <FontAwesomeIcon className={styles.lock} icon={faLock} style={{color: "#94A3B8"}} />
                            <p className={styles.confirmPasswordTitle}> Password </p>
                        </div>
                        <input type="text" placeholder="**********" className={styles.confirmPasswordInput} />
                    </div>
                    <button className={styles.signupBtn}>
                        <FontAwesomeIcon className={styles.signupBtnIcon} icon={faRightToBracket} style={{color: "#FFFFFF"}}/>
                        <p className={styles.signupBtnText}> Sign Up</p>
                    </button>

                    <p className={styles.noAccount}> Already have an account? <Link to="/signup" className={styles.linkToSignUp}> <span className={styles.signUpText}> Log In </span> </Link> </p>
                </div>
            </div>
            <img src={image} className={styles.signupImage} />
        </div>
    );
}

export default Signup