import styles from '../css/featurecomponent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FeatureComponent({icon, title, description}) {
    return(
        <div className={styles.feature}>
            <FontAwesomeIcon className={styles.featureIcon} icon={icon} style={{color: "#7E62F4",}}/>
            <p className={styles.featureTitle}> {title} </p>
            <p className={styles.featureDescription}> {description} </p>
        </div>
    );
}

export default FeatureComponent