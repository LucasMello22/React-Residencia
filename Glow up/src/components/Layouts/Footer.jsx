import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaDiscord} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import styles from './Footer.module.css'


function Footer() {
return (<footer className={styles.footer}>
    <ul className={styles.ul}>
        <li>
            <a href='https://www.facebook.com/facebook' className={styles.hrefs} target='_blank'>
                <FaFacebook />
            </a>
        </li>
        <li>
            <a href='https://www.instagram.com/portodigital/' className={styles.hrefs} target='_blank'>
                <FaInstagram />
            </a>
            
        </li>
        <li>
            <a href='https://www.youtube.com/@PortoDigitalREC' className={styles.hrefs} target='_blank'>
                <FaYoutube />
            </a>
        </li>
        <li>
            <a href='https://twitter.com/porto_digital?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' className={styles.hrefs} target='_blank'>
                <FaXTwitter />
            </a>
        </li>
        <li>
            <a href='https://www.linkedin.com/company/portodigital/' className={styles.hrefs} target='_blank'>
                <FaLinkedin />
            </a>
        </li>
        <li>
            <a href='https://discord.gg/tkt3EDsfQb' className={styles.hrefs} target='_blank'>
                <FaDiscord />
            </a>
        </li>

    </ul>
</footer>);

};

export default Footer;