import { useNavigate } from 'react-router-dom'
import ShartingaLogo from '../assets/ShartingaLogo.PNG'
import '../styling/shartingaheader.css'

function ShartingaHeader() {

    const navigate = useNavigate();

    const home = () => {
        navigate('/')
    };

    return (
        <div className="shartinga-header">
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