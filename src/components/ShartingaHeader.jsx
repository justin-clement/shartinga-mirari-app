import { useNavigate } from 'react-router-dom'
import ShartingaLogo from '../assets/ShartingaLogo.PNG'
import styles from '../styling/shartingaheader.module.css'

function ShartingaHeader() {

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    };

    return (
        <div className={styles.shartingaHeader}>
            <img 
            src={ShartingaLogo} 
            alt="Shartinga Logo" 
            className="shartinga-logo" 
            width={250} 
            onClick={home} />
        </div>
    )
}

export default ShartingaHeader;