import styles from './SectionTecnologia.module.scss';
export default function SectionTecnologia() {
    return (
        <section className={styles.container}>
            <img className={styles.image} src='assets/img/Foto_curriculo2.jpg'/>

            <div className={styles.containerSkills}>
                <h1 className={styles.title}>Tecnologias</h1>
                <ul>
                    <li className={styles.skill}>HTML</li>
                    <li className={styles.skill}>CSS</li>
                    <li className={styles.skill}>JavaScript</li>
                    <li className={styles.skill}>React</li>
                    <li className={styles.skill}>React Native</li>
                    <li className={styles.skill}>Rest</li>
                    <li className={styles.skill}>Node.js</li>
                    <li className={styles.skill}>Git/GitHub</li>
                </ul>
            </div>
        </section>
    )
}