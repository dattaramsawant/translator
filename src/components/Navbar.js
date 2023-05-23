import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/navbarTranslator.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
           <h1 className={styles.logo}>LOGO</h1> 
           <div className={styles.linkContainer}>
                <Link to={'/usingGoogleTranslator'} className={styles.link}>
                    Using Google Translator
                </Link>
                <Link to={'/usingReacti18Translator'} className={styles.link}>
                    Using Reacti18 Translator
                </Link>
           </div>
        </div>
    )
}

export default Navbar