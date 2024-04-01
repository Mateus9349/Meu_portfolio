import Link from "next/link";

import styles from './NavBar.module.scss';

export default function NavBar() {
    return(
        <header className={styles.container}>
            <div className={styles.title}>
                <Link href='/' className={styles.link}>Desenvolvedor FullStack</Link>
            </div>

            <nav className={styles.nav}>
                <Link href='/Cursos' className={styles.link}>Cursos</Link>
                <Link href='/Experiencia' className={styles.link}>Experiência</Link>
                <Link href='/Projetos' className={styles.link}>Projetos</Link>
            </nav>    
        </header>
    )
}