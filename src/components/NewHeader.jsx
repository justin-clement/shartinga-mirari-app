import styles from "../styling/newheader.module.css";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { HiOutlineShoppingCart as CartIcon } from "react-icons/hi";
import logo from "../assets/sm_web_logo.jpg";
import { useNavigate } from "react-router-dom";


function MainHeader() {

    const navigate = useNavigate();

    const goToCollections = () => {
        navigate("/collections")
    };

    const goToHome = () => {
        navigate("/")
    };

    const goToAbout = () => {
        navigate("/about")
    };

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logoArea}>
                    <img onClick={goToHome} width={150} src={logo} alt="Shartinga Mirari Logo" />
                </div>

                <div className={styles.navigationMenu}>
                    <p onClick={goToCollections}>COLLECTIONS</p>
                    <p>MANIFESTO</p>
                    <p onClick={goToAbout}>ABOUT</p>
                </div>

                <div className={styles.icons}>
                    <div className="iconDiv"> <SearchIcon /> </div>
                    <div className="iconDiv"> <CartIcon />  </div>
                </div>
            </div>
        </>
    )
};

export default MainHeader;