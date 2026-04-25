import { useNavigate } from "react-router-dom";
import styles from "../styling/footer.module.css"
import { MdOutlineEmail as Email } from "react-icons/md";
import { IoLogoWhatsapp as Whatsapp } from "react-icons/io5";
import { FaInstagram as Insta, FaTiktok as Tiktok } from "react-icons/fa";



function Footer() {


    return (
        <>
            <div className={styles.footerContainer}>
            
                <ul className={styles.contactPanel}>
                    <li>
                        <div>
                            <a 
                            style={{color: "grey"}}
                            href="mailto:shartinga.mirari.fashion@gmail.com"><Email size={20} /></a>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <Insta 
                            color="grey"
                            size={20} />
                        </div>
                    </li>
                    <li>
                        <div>
                            <Tiktok 
                            color="grey"
                            size={20} />
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