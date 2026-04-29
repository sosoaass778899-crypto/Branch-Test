
// import './Navbar.css'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav>
      <ul  className={styles.list}>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="about">about</a>
        </li>

        <li>
          <a href="contact">contact</a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar
