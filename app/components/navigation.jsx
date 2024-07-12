import Link from "next/link";
import styles from "./navigation.module.css"

const pages = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "About",
    route: "/about"
  },
  {
    label:"Posts",
    route:"/posts"
  }
]

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {pages.map(({label, route}) => 
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;