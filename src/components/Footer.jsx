import { useNavigate } from "react-router-dom";
import styles from "../styling/footer.module.css"
import { MdOutlineEmail as Email } from "react-icons/md";
import { IoLogoWhatsapp as Whatsapp } from "react-icons/io5";
import { FaInstagram as Insta, FaTiktok as Tiktok } from "react-icons/fa";



function Footer() {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about')
    }

    return (
        <>
            <div className={styles.footerContainer}>
                <p onClick={goToAbout}>About Shartinga</p>

                <p style={{ 
                    margin: "0"
                }}>Stay in touch</p>
                <ul className={styles.contactPanel}>
                    <li>
                        <div>
                            <a 
                            style={{color: "goldenrod"}}
                            href="mailto:shartinga.mirari.fashion@gmail.com"><Email size={40} /></a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Whatsapp 
                            color="green"
                            size={40} />
                        </div>
                    </li>
                    <li>
                        <div>
                            <Insta 
                            color="purple"
                            size={40} />
                        </div>
                    </li>
                    <li>
                        <div>
                            <Tiktok 
                            size={40} />
                        </div>
                    </li>
                </ul>
                <br />

                <p>© {new Date().getFullYear()} SHARTINGA MIRARI</p>
            </div>
        </>
    )
};

export default Footer;