import styles from '../css/home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

import image from '../assets/laptop-typing.jpeg'

import FeatureComponent from '../components/FeatureComponent.jsx'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.homeNavbar}>
                <div className={styles.leftSide}>
                    <FontAwesomeIcon className={styles.homeNavbarIcon} icon={faSuitcase} style={{color: "#7E62F4",}}/>
                    <p className={styles.homeNavbarTitle}> JobTrackr </p>
                </div>
                <div className={styles.rightSide}>
                    <Link to="/login"> <button className={styles.loginBtn}> Log In </button> </Link>
                    <Link to="/signup"> <button className={styles.signupBtn}> Sign Up </button> </Link>
                </div>
            </div>
            <div className={styles.heroSection}>
                <div className={styles.heroLeft}> 
                    <p className={styles.heroTitle}> Track Your Job Search Journey </p>
                    <p className={styles.heroDescription}> Stay organized, manage applications, and land your dream job with this amazing powerful job tracking platform. </p>
                    <div className={styles.heroBtns}>
                        <Link to="/signup"> <button className={styles.getStartedBtn}> Get Started 
                            <FontAwesomeIcon className={styles.getStartedBtnIcon} icon={faArrowRight} style={{color: "#FFFFFF",}}/>
                        </button> </Link>
                        <button className={styles.learnMoreBtn}> Learn More </button>
                    </div>
                </div>
                <img className={styles.heroImg} src={image}/>
            </div>
            <div className={styles.featuresSection}>
                <p className={styles.featuresTitle}> Features </p>
                <p className={styles.featuresDescription}> Everything you need to organize your job search in one place </p>
                <div className={styles.features}>
                    <FeatureComponent icon={faSuitcase} title="Track Applications" description="Keep all your job applications organized in one place with status tracking" />
                    <FeatureComponent icon={faGreaterThan} title="Analytics Dashboard" description="Visualize your job search progress with insightful analytics and charts" />
                    <FeatureComponent icon={faSquareCheck} title="Interview Preparation" description="Stay prepared for interviews with notes, reminders, and scheduling tools" />
                </div>
            </div>
            <div className={styles.footerSection}>
                <div className={styles.readySection}>
                    <p className={styles.readyTitle}> Ready to organize your job search? </p>
                    <p className={styles.readyDescription}> Create an account today and take control of your job application process </p>
                    <div className={styles.readyBtns}> 
                        <button className={styles.readySignUpBtn}> Sign Up Free </button>
                        <button className={styles.readyLogInBtn}> Log In </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home