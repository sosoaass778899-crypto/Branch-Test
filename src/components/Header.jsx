
// import  `./Header.css` ;
// import  './Header.css' ;
import styles from './Header.module.css'
import Navbar from "./Navbar"


const Header = () => {
  return (
   <div className={styles.Header} >
      <a href="/">logo</a>
     <Navbar/>
    </div>
  )
}

export default Header
